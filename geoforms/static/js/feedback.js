!function(){this.show_feedback=function(){var e,t,r,a,n,i,l,o,s,p,u,c,d,f,h,m,y,g,b,v,k,C,w,x,L,_,S,N,O,P,q;return h=function(){var e,t,r;return t=0,r={},e=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf","#9edae5","#98df8a","#aec7e8","#ffbb78","#ff9896","#c5b0d5","#c49c94","#f7b6d2","#c7c7c7","#dbdb8d"],function(a){return a in r||(r[a]=e[t++%20]),{strokeWidth:5,strokeColor:r[a],fillColor:"black",cursor:"pointer",fillOpacity:.1,pointRadius:6}}},f=function(){var e;return e=new OpenLayers.Control.SelectFeature(map.getControl("selectcontrol").layers.concat(map.getLayersByName("Marking Layer")[0]),{hover:!0,highlightOnly:!0,multiple:!0,renderIntent:"highlight",eventListeners:{featurehighlighted:C,featureunhighlighted:p}})},w=function(e){var t,r,a;if(e in x)return x[e];if(r=0,t=void 0,0===e.length)return r;for(a=0;a<e.length;)t=e.charCodeAt(a),r=(r<<5)-r+t,r&=r,a++;for(r=Math.abs(r);r in v;)r++;return v[r]=e,r=r.toString(),x[e]=r,r},r=function(e,t){var r;return r=questionnaire.metadata.drawbuttons.hasOwnProperty(e)?questionnaire.metadata.drawbuttons[e].question:e,$("ul.feature-ctrl-main").append($("<li></li>").addClass("feature-level-ctrl").append($('<input type="checkbox">').addClass("feature-level-ctrl").attr("id",e).attr("value",e).prop("checked",!1).change(L)).append($("<label></label>").addClass("feedback-bold").css("color",t.style.strokeColor).text(r).attr("for",e)).append($("<ul></ul>").addClass("mini-questionnaire").addClass(e).hide()))},t=function(e,t){return $("ul.property-ctrl-main").append($("<li></li>").html($("<div></div>").css("padding",0).addClass("feedback-bold").text(t)).append($("<ul></ul>").addClass("question-level-ctrl").addClass(e)))},L=function(e){var t,r,a,n,o,s,p,u,c,d,f;for(t=e.target.checked?"checked":"none",o=function(){var t,r,n,l;for(n=i[e.target.id],l=[],t=0,r=n.length;r>t;t++)a=n[t],l.push(q[a]);return l}(),s=0,c=o.length;c>s;s++)r=o[s],r.style.display=t;for(p=0,d=o.length;d>p;p++)r=o[p],P[r.attributes.user]===!1&&(r.style.display="none");for(u=0,f=o.length;f>u;u++)r=o[u],l[r.attributes.id]===!1&&(r.style.display="none");return n=$(e.target).closest("li.feature-level-ctrl").find(".mini-questionnaire"),"none"===t?n.hide():n.show(),map.getLayersByName("Marking Layer")[0].redraw()},S=function(e){var t,r,a,n,i,l,o;if(r={},0===e.length)return r;for(n=0,l=e.length;l>n;n++)for(t=e[n],i=0,o=t.length;o>i;i++)a=t[i],r[a]=!0;return r},c=function(e){var t,r,a,n,i,l,o,s,p,u,c,d;if(r={},0===e.length)return r;for(u=e[0],n=0,o=u.length;o>n;n++)a=u[n],r[a]=!0;if(1===e.length)return r;for(c=e[0],i=0,s=c.length;s>i;i++)for(a=c[i],d=e.slice(1),l=0,p=d.length;p>l;l++)if(t=d[l],-1===t.indexOf(a)){delete r[a];break}return r},o=function(e){var t,r,a,o,s,p;for(r=[],$(e.target).closest(".mini-questionnaire").find('input[type="checkbox"].attribute-level-ctrl').each(function(){return this.checked?r.push(n[this.value]):void 0}),a=$('.feature-ctrl-andor input[value="and"]').first().prop("checked")?c(r):S(r),p=i[$(e.target).closest("li.feature-level-ctrl").find("input.feature-level-ctrl").attr("id")],o=0,s=p.length;s>o;o++)t=p[o],l[t]=t in a?!0:!1;return $(e.target).closest("li.feature-level-ctrl").find("input.feature-level-ctrl").change()},s=function(){var e,t,r,n,i,l,o;o=[],$("input.property-ctrl-boolean").each(function(){return this.checked?o.push(a[this.value]):void 0}),r=$('.property-ctrl-andor input[value="and"]').first().prop("checked")?c(o):S(o),n={},$("input.property-ctrl-min").each(function(){return n[this.name]=[parseInt(this.value)]}),$("input.property-ctrl-max").each(function(){return n[this.name].push(parseInt(this.value))});for(l in r)for(i in n)if(t=$("input#exclude-"+i).first().prop("checked"),l in N){if(!(i in N[l])){if(!t)continue;delete r[l]}e=N[l][i],e>=n[i][0]&&e<=n[i][1]||delete r[l]}else{if(!t)continue;delete r[l]}for(l in P)P[l]=l in r?!0:!1;return $("input.feature-level-ctrl").change()},g=function(e){var r,n,i,l,o,p,u,c,f,h,m,y,g,b,v,k;if(n=function(){var e,t,n,i,l,o,h,g;for(t=function(){return $("ul."+u).append($("<li></li>").append($("<label></label>").attr("for","min-"+u).append("Min:").append($("<input>").addClass("property-ctrl-min").attr("type","text").attr("id","min-"+u).attr("name",u)).change(s))).append($("<li></li>").append($("<label></label>").attr("for","max-"+u).append("Max:").append($("<input>").addClass("property-ctrl-max").attr("type","text").attr("id","max-"+u).attr("name",u)).change(s))).append($("<li></li>").append($("<label></label>").attr("for","exclude-"+u).append($("<input>").addClass("property-ctrl-exclude").attr("type","checkbox").attr("id","exclude-"+u).attr("name",u)).change(s).append("Exclude people who did not answer")))},e=function(){return $("ul."+u).append($("<li></li>").append($("<label></label>").attr("for",i).append($("<input>").addClass("property-ctrl-boolean").attr("type","checkbox").attr("id",i).val(i).attr("checked","checked")).change(s).append(n)))},g=[],l=0,o=r.length;o>l;l++)n=r[l],isNaN(Number(n))?(d(n)||(n="*long-answer"),i=w(u+"-AND-"+n),i in m||(e(),m[i]=!0),null==a[i]&&(a[i]=Array()),g.push(a[i].push(p.user))):(u in y||t(),n=parseInt(n),null==N[h=p.user]&&(N[h]={}),N[p.user][u]=n,null==c[u]&&(c[u]=n),n>c[u]&&(c[u]=n),null==f[u]&&(f[u]=n),n<f[u]?g.push(f[u]=n):g.push(void 0));return g},e.entry){for(o={user:!0,time:!0,id:!0,group:!0},y={},m={},c={},f={},k=e.entry,g=0,b=k.length;b>g;g++)if(p=k[g],!("form_values"in p)){null==O[v=p.user]&&(O[v]={});for(u in p)r=p[u],u in o||(h=u.split("t201")[0],u=w(h),u in y||t(u,h),r instanceof Array||(r=[r]),O[p.user][h]=r,n(),y[u]=!0)}for(u in c)i=c[u],$('input.property-ctrl-max[name="'+u+'"]').val(i);for(u in f)l=f[u],$('input.property-ctrl-min[name="'+u+'"]').val(l);return $("ul.property-ctrl-main ul").filter(function(){return $(this).find("li").length<2}).parent().remove(),$("#property-ctrl .loading").remove()}},y=function(t){var a,s,p,u,c,f,m,y,g,v,k,C,x,L;if(t.features){for(k=map.getLayersByName("Marking Layer")[0],y=h(),g=new OpenLayers.Format.GeoJSON,x=new OpenLayers.Projection(t.crs.properties.code),L=new OpenLayers.Projection(map.getProjection()),$("#feature-ctrl").append($("<ul></ul>").addClass("feature-ctrl-main")),$("#feature-ctrl").prepend("<h2>Choose features to show</h2>"),$("#property-ctrl").prepend("<h2>Filter respondents</h2>"),C={},v=0;v<t.features.length;){m=g.parseFeature(t.features[v]),f=m.attributes.name,m.geometry.transform(x,L),m.lonlat=gnt.questionnaire.get_popup_lonlat(m.geometry),m.style=y(f),m.style.display="none",m.attributes.id=v,m=b(m),q[v]=m,P[m.attributes.user]=!0,f in i||(i[f]=Array(),r(f,m)),i[f].push(v);for(a in m.attributes.form_values){c=w([f,a].join("-AND-")),c in C||(C[c]=!0,$("."+f).append($("<li></li>").addClass("attr-ctrl").append($("<div></div>").css("color",m.style.strokeColor).html(a)).append($("<ul></ul>").addClass(c))));for(p in m.attributes.form_values[a]){if(!d(p)){if(!isNaN(Number(p)))continue;p="*long-answer"}s=w([f,a,p].join("-AND-")),s in n||(n[s]=Array(),$("."+c).append($("<li></li>").append($('<input type="checkbox">').addClass("attribute-level-ctrl").attr("id",s).attr("value",s).attr("checked","checked").change(o)).append($("<label></label>").css("color",m.style.strokeColor).text(p).attr("for",s)))),n[s].push(v)}}k.addFeatures(m),v+=1}for(u in q)l[u]=!0;return e(),$(".attr-ctrl").filter(function(){return $(this).find("li").length<2}).remove(),$('.feature-ctrl-andor input[value="or"]').prop("checked",!0),$(".feature-ctrl-andor input").change(_),$("#feature-ctrl .loading").remove(),$("input.feature-level-ctrl").first().prop("checked",!0).change()}},_=function(){return $("li.feature-level-ctrl").each(function(){return $(this).find("input.attribute-level-ctrl").first().change()})},d=function(e){return-1===e.indexOf(" ")&&e.charCodeAt(0)>="a".charCodeAt(0)&&e.charCodeAt(0)<="z".charCodeAt(0)?!0:!1},p=function(){return $("div.analysis_popup").hide()},C=function(e){var t,r,a,n,i,l,o,s,p,u,c;$(".analysis_popup").html("").hide(),$(".feature_comments").append('<div class="name">'+e.feature.attributes.name+"</div>"),a=e.feature.attributes.form_values;for(n in a){$(".feature_comments").append('<div class="attribute-name">'+n+"</div>"),l=$("<ul></ul>");for(s in a[n])l.append($("<li></li>").html(s));$(".feature_comments").append(l)}o=e.feature.attributes.user,$(".user_info").prepend($("<div>user: "+o+"</div>").addClass("username")),c=O[o];for(i in c){for(r=c[i],$(".user_info").append('<div class="attribute-name">'+i+"</div>"),l=$("<ul></ul>"),p=0,u=r.length;u>p;p++)t=r[p],l.append($("<li></li>").html(t));$(".user_info").append(l)}return $(".analysis_popup").show()},b=function(e){var t,r,a,n;for(a={},t=e.attributes.form_values,r=0;r<t.length;)n=t[r],n.name in a||(a[n.name]={}),a[n.name][n.value]=!0,r+=1;return e.attributes.form_values=a,e},e=function(){return $(".mini-questionnaire").prepend($("<label>Check all</label>").css("font-weight","bold").prepend($('<input type="checkbox">').css("margin-right","3px").prop("checked",!0).change(function(e){return $(e.target).closest(".mini-questionnaire").find('input[type="checkbox"]').prop("checked",e.target.checked),$(e.target).closest(".mini-questionnaire").find('input[type="checkbox"].attribute-level-ctrl').last().change()}))),$(".property-ctrl-general").append($("<label>Check all</label>").css("font-weight","bold").prepend($('<input type="checkbox">').css("margin-right","3px").prop("checked",!0).change(function(e){return $("input.property-ctrl-boolean").prop("checked",e.target.checked),s()})))},P={},l={},i={},q={},n={},a={},N={},v={},x={},O={},$(".property-ctrl-andor input").change(s),$('.property-ctrl-andor input[value="or"]').first().prop("checked",!0),$(".span_right").css("left","570px"),$(".span_left").css("width","570px"),map.updateSize(),$("a#feedback").hide(),map.getLayersByName("Route Layer")[0].setVisibility(!1),map.getLayersByName("Point Layer")[0].setVisibility(!1),map.getLayersByName("Area Layer")[0].setVisibility(!1),m=new OpenLayers.Layer.Vector("Marking Layer",{styleMap:new OpenLayers.StyleMap({"default":{strokeWidth:3,strokeColor:"red",cursor:"pointer",fillColor:"#aaaaff",fillOpacity:.3,pointRadius:5},highlight:{strokeWidth:3,strokeColor:"#555555",cursor:"pointer",fillColor:"#555555",fillOpacity:.3,pointRadius:5}})}),map.addLayer(m),k=map.getControl("selectcontrol"),k.setLayer(k.layers.concat(m)),$("#property-ctrl").prepend('<div class="loading">Loading data... please wait</div>'),$("#feature-ctrl").prepend('<div class="loading">Loading data... please wait</div>'),$.get("/questionnaire_admin/meta/"+questionnaire.q_id,function(e){return questionnaire.metadata=e,gnt.geo.get_features("@all",data_group,"",{success:y}),gnt.geo.get_properties("@all",data_group,"@null","@all",{success:g})}),u=f(),map.addControl(u),u.activate()},this.make_sld_getter=function(){var e,t,r,a;return t=0,r={},e=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],a='<?xml version="1.0" encoding="ISO-8859-1"?><StyledLayerDescriptor version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <NamedLayer> <Name>NAME</Name> <UserStyle> <Title>SLD Cook Book: Line w2th border</Title> <FeatureTypeStyle> <Rule> <LineSymbolizer> <Stroke> <CssParameter name="stroke">#333333</CssParameter> <CssParameter name="stroke-width">7</CssParameter> <CssParameter name="stroke-linecap">round</CssParameter> </Stroke> </LineSymbolizer> </Rule> </FeatureTypeStyle> <FeatureTypeStyle> <Rule> <LineSymbolizer> <Stroke> <CssParameter name="stroke">COLOR</CssParameter> <CssParameter name="stroke-width">5</CssParameter> <CssParameter name="stroke-linecap">round</CssParameter> </Stroke> </LineSymbolizer> </Rule> </FeatureTypeStyle> </UserStyle> </NamedLayer></StyledLayerDescriptor>',function(n){var i,l;return i="",n in r?i=r[n]:(i=e[t++%10],r[n]=i),l=a.replace("NAME",n),l.replace("COLOR",i)}}}.call(this);