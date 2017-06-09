---
layout: story
title: Kadaster Data Stories ― Ships & Sailors
categories: []
---
    <div class="container story"
         data-query-endpoint="http://semanticweb.cs.vu.nl/dss/sparql/">
      <h1>Hands on exercises Dutch Ships and Sailors</h1>
      <h2>By: Victor de Boer</h2>
      <p>This page lists SPARQL Queries that you can test on a Dutch
        Ships and Sailors (DDS) SPARQL Endpoint.  There are two
        ClioPatria triple stores: one hosted at Huygens ING
        (<a href="http://dutchshipsandsailors.nl/data">http://dutchshipsandsailors.nl/data</a>)
        and one hosted at VU
        (<a href="http://semanticweb.cs.vu.nl/dss">http://semanticweb.cs.vu.nl/dss</a>).
        It is best to use the second one for this hands on session.
        On the web interface you can browse the data (through the menu
        item “Places”->”Graphs” or through the search box in the top
        right). For live SPARQL Queries you find a number of options
        under the “Query” menu This includes the great YASGUI
        interface with all kinds of query assistance or the simple
        form.  I suggest using that one.</p>
      <p>If you want to use an external tool for these queries (such
        as CURL or SPARQL for R), you should use the endpoint for
        machines which is at “/sparql/” (Don’t forget the slash at the
        end
        ie. <code>http://semanticweb.cs.vu.nl/dss/sparql/?query=PREFIX…</code>).</p>
      <h2>The data</h2>
      <p>These following example queries work on the Dutch Asiatic
        Shipping subset of the DSS data.  The dataset lists voyages of
        VOC ships in the 17th Century, including the ship, its name,
        the captain, date and place of departure and arrival.  To get
        an overview over what is in this data, you can look at its
        <a href="http://semanticweb.cs.vu.nl/dss/browse/list_graph?graph=http://purl.org/collections/nl/dss/das/das_data.ttl">main
        named graph in the ClioPatria interface</a> or, more
        specifically at
        the <a href="http://semanticweb.cs.vu.nl/dss/browse/list_predicates?graph=http://purl.org/collections/nl/dss/das/das_data.ttl">list
        of predicates used in that graph</a>.  Another way is to look
        at an instance of a specific voyage, for
        example <a href="http://purl.org/collections/nl/dss/das/voyage-5580_1">this
        one</a>:</p>
      <!--
      <div data-query data-query-sparql="describe.rq" data-query-output="raw"></div>
      -->
      <div data-query data-query-sparql="cbd.rq"></div>
      <h2>Example queries and exercises</h2>
      <p>In SPARQL queries <code>#</code> denotes line comments.  In
        between the example queries there are a few open exercises to
        expand on the queries.  You can change the queries in order to
        explore the data yourself.  For inspiration and checking
        syntax, you can look at
        a <a href="http://jena.apache.org/tutorials/sparql.html">SPARQL
        tutorial</a> or this page with
        <a href="https://code.google.com/p/void-impl/wiki/SPARQLQueriesForStatistics">SPARQL
        examples for statistical queries</a>.</p>
      <p>The alias <code>das</code> denotes the IRI
        prefix <code>http://purl.org/collections/nl/dss/das/</code>
        and is used to abbreviate long IRIs.</p>
      <p>It is a good idea to set the entailment
        to <code>rdfslite</code>, since this reduces calculation
        times.</p>
      
      <h2>Let's go!</h2>
      <p>Our first query: List the first 10 triples:</p>
      <div data-query data-query-sparql="10_triples.rq" data-showQuery></div>
      <p>Now, list the first 100 “<code>?instance</code> is of
        type <code>?class</code>” triples (the letter <code>a</code>
        is used as shorthand notation for <code>rdf:type</code>).</p>
      <div data-query data-query-sparql="100_instances.rq" data-showQuery></div>
      <p>Find all distinct predicates that DAS Ships have (Set
        Entailment to <code>rdfslite</code> otherwise the query takes
        a very long time.)</p>
      <div data-query data-query-sparql="distinct_predicates.rq" data-showQuery>
      </div>
          
      <p><b>EXERCISE 1A</b>: Adjust the above query in order to find
        all distinct classes.  What are these?</p>
      <p><b>EXERCISE 1B</b>: Find all distinct classes in the DAS
        named graph (hint, you can use <code>GRAPH { *graph pattern
        here* }</code></p>

      <p>Find all DAS places with preferred label “Middelburg”:</p>
      <div data-query data-query-sparql="middelburg.rq" data-showQuery></div>
      
    </div>
    <script src="/resource/js/jquery-3.2.1.min.js"></script>
    <script src="/resource/js/tether-1.3.3.min.js"></script>
    <script src="/resource/js/bootstrap.min.js"></script>
    <script src="/resource/js/yasgui.min.js"></script>
    <script type="text/javascript">
YASGUI.YASR.plugins.leaflet.defaults.defaultMap = "nlmaps";
YASGUI.sparqlStories();
    </script>
  </body>
</html>