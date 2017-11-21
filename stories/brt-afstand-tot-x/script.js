/* global YASGUI */

const query = `
prefix brt: <http://brt.basisregistraties.overheid.nl/def/top10nl#>
prefix cbs: <https://data.pdok.nl/cbs/vocab/>
prefix geo: <http://www.opengis.net/ont/geosparql#>
select (max(?min) as ?max) {
  ?gemeente a cbs:Gemeente .
  {
    select ?gemeente (min(?d) as ?min)  {
      ?gemeente a cbs:Gemeente ; geo:hasGeometry/geo:asWKT ?wktA .
      graph <https://krr.triply.cc/LaurensRietveld/brt/graphs/default> {
        ?feature a brt:KerncentraleKernreactor ; geo:hasGeometry/geo:asWKT ?wktB .
      }
      bind (bif:ST_XMin(?wktA) as ?Ax1)
      bind (bif:ST_YMin(?wktA) as ?Ay1)
      bind (bif:ST_XMax(?wktA) as ?Ax2)
      bind (bif:ST_YMax(?wktA) as ?Ay2)
      bind (bif:st_point(?Ax1 + ((?Ax2 - ?Ax1) / 2), ?Ay1 + ((?Ay2 - ?Ay1) / 2)) as ?pA)
      bind (bif:ST_XMin(?wktB) as ?Bx1)
      bind (bif:ST_YMin(?wktB) as ?By1)
      bind (bif:ST_XMax(?wktB) as ?Bx2)
      bind (bif:ST_YMax(?wktB) as ?By2)
      bind (bif:st_point(?Bx1 + ((?Bx2 - ?Bx1) / 2), ?By1 + ((?By2 - ?By1) / 2)) as ?pB)
      bind (bif:st_distance(?pA, ?pB) as ?d)
    } group by ?gemeente
  }
}`;

YASGUI.YASQE.defaults.value = query;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(location => {
    YASGUI.YASQE.defaults.value = query.replace('KerncentraleKernreactor', `WindmolenKorenmolen`);
    YASGUI.sparqlStories();
  });
}
