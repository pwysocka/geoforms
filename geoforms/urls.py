from django.conf.urls import patterns
from django.conf.urls import url

urlpatterns = patterns('geoforms.views',
    url(r'^active/$',
        'get_active_questionnaires',
        name='active_questionnaires'),
    url(r'^(?P<questionnaire_id>\d{1,6})/feedback$',
        'feedback',
        name="feedback"),
    url(r'^(?P<questionnaire_id>\d{1,6})/no-save$',
        'no_save',
        name="nosave"),
    url(r'^(?P<questionnaire_id>\d{1,6})/lottery$',
        'lottery',
        name="lottery"),
    url(r'^(?P<questionnaire_id>\d{1,6})/$',
        'questionnaire',
        name="questionnaire"),
    )
