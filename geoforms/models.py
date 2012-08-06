from django.conf import settings
from django.contrib.gis.db import models as geomodel
from django.contrib.sites.managers import CurrentSiteManager
from django.contrib.sites.models import Site
from django.db import models
from django.template.defaultfilters import slugify
from django.template.loader import render_to_string
from django.utils.translation import ugettext as _
from django.utils import timezone

class GeoformElement(models.Model):
    """
    This is one input element in a
    geoform..
    The elements of a form is written in
    HTML 5,
    
    The javascript will parse the html and
    create additional functionality and other
    required measures. The classes and data to
    pass in for widget effects is documented
    below.
    """
    slug = models.SlugField(max_length = 50,
                            editable = False,
                            unique = True)
    name = models.CharField(max_length = 50,
                            help_text = render_to_string('help/geoform_element_name.html'))
    html = models.TextField(help_text = render_to_string('help/geoform_element_html.html'))

    def save(self, *args, **kwargs):
        self.slug = slugify("%s %s" % (self.name, timezone.now()))

        super(GeoformElement, self).save(*args, **kwargs)
    
    def __unicode__(self):
        return u'%s' % (self.name)
        
    class Meta:
        verbose_name = _('questionnaire page element')
        verbose_name_plural = _('questionnaire page elements')
    

class Geoform(models.Model):
    """
    This is one form in a questionnaire

    fields starting with small f is for the
    form html element.
    """
    slug = models.SlugField(max_length = 50,
                                      editable = False,
                                      unique = True)
    name = models.CharField(max_length = 50)
    type = models.CharField(max_length = 5,
                            choices = (
                                ('popup', 'popup'),
                                ('form','form')),
                            default = 'form')
    elements = models.ManyToManyField(GeoformElement,
                                      through = 'FormElement')

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)

        super(Geoform, self).save(*args, **kwargs)

    def __unicode__(self):
        return u'%s - %s' % (self.name,
                             self.type)
        
    class Meta:
        verbose_name = _('questionnaire page')
        verbose_name_plural = _('questionnaire pages')


class FormElement(models.Model):
    """
    This model orders the elements in a
    form to any required order.
    """
    geoform = models.ForeignKey(Geoform)
    element = models.ForeignKey(GeoformElement)
    order = models.IntegerField(default=1)

    def __unicode__(self):
        return u'page element'
        
    class Meta:
        verbose_name = _('page element')
        verbose_name_plural = _('page elements')
        
class Questionnaire(models.Model):
    """
    This is one questionnaire,
    """
    geoforms = models.ManyToManyField(Geoform,
                                      through = 'QuestionnaireForm',
                                      related_name = 'geoforms')
    name = models.CharField(_('name of questionnaire'),
                            max_length = 100)
    slug = models.SlugField(max_length = 100,
                            editable = False,
                            unique = True)
    area = geomodel.PolygonField(_('area of questionnaire'),
                                 srid = getattr(settings, 'SPATIAL_REFERENCE_SYSTEM_ID', 4326))
    site = models.ForeignKey(Site,
                             default = getattr(settings, 'SITE_ID', 1),
                             editable = False)

    on_site = CurrentSiteManager()

    def save(self, *args, **kwargs):
        
        self.slug = slugify(self.name)

        super(Questionnaire, self).save(*args, **kwargs)

    def __unicode__(self):
        return u'%s' % self.name

    class Meta:
        unique_together = (("slug", "site"),)
        verbose_name = _('questionnaire')
        verbose_name_plural = _('questionnaires')

class QuestionnaireForm(models.Model):
    """
    This is the form that tells the view in which order
    the forms should be in a questionnaire.

    Also works as the manytomany relationship between
    questionnaires and forms.
    """
    questionnaire = models.ForeignKey(Questionnaire)
    geoform = models.ForeignKey(Geoform)
    order = models.IntegerField(default=1)

    def __unicode__(self):
        return u'questionnaire page'
        
    class Meta:
        verbose_name = _('questionnaire page')
        verbose_name_plural = _('questionnaire pages')
        





