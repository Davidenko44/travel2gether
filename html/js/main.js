function submitfunction() {
	var from = $("#from")[0], to = $("#to")[0];
	
	queryNS(from.value, to.value);
}

function queryNS(fromStation, toStation) {
	var url = "http://webservices.ns.nl/ns-api-treinplanner?fromStation=" + fromStation + "&toStation=" + toStation;
	
	console.log(url);
	
	$.ajax(url, {
		complete: function (xmlhttprequest, response) {
			console.log(response);
			console.log(xmlhttprequest);
		}
	})
}

function getAvailableRides(xmlData){
	//parsen

	var table = "<table>
	<thead><th>Departure</th><th>Arrival</th></thead>
	<tbody>
	<tr>
		<td>15:15</td><td>15:34</td>
	</tr>
	<tr>
		<td>15:25</td><td>15:51</td>
	</tr>
	</tbody>
	</table>"

	return table;

}

function queryNSTest(){
	var output = "<ReisMogelijkheden>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:22</GeplandeReisTijd>
<ActueleReisTijd>0:22</ActueleReisTijd>
<Optimaal>false</Optimaal>
<GeplandeVertrekTijd>2015-03-17T13:43:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T13:43:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T14:05:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T14:05:00+0100</ActueleAankomstTijd>
<Status>VOLGENS-PLAN</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3544</RitNummer>
<Status>VOLGENS-PLAN</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T13:43:00+0100</Tijd>
<Spoor wijziging="false">7</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T14:00:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T14:05:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:24</GeplandeReisTijd>
<ActueleReisTijd>0:24</ActueleReisTijd>
<Optimaal>false</Optimaal>
<GeplandeVertrekTijd>2015-03-17T13:58:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T13:58:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T14:22:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T14:22:00+0100</ActueleAankomstTijd>
<Status>VOLGENS-PLAN</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3144</RitNummer>
<Status>VOLGENS-PLAN</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T13:58:00+0100</Tijd>
<Spoor wijziging="false">5</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T14:16:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T14:22:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:22</GeplandeReisTijd>
<ActueleReisTijd>0:22</ActueleReisTijd>
<Optimaal>false</Optimaal>
<GeplandeVertrekTijd>2015-03-17T14:13:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T14:13:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T14:35:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T14:35:00+0100</ActueleAankomstTijd>
<Status>VOLGENS-PLAN</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3546</RitNummer>
<Status>VOLGENS-PLAN</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T14:13:00+0100</Tijd>
<Spoor wijziging="false">7</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T14:30:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T14:35:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:24</GeplandeReisTijd>
<ActueleReisTijd>0:24</ActueleReisTijd>
<Optimaal>false</Optimaal>
<GeplandeVertrekTijd>2015-03-17T14:28:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T14:28:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T14:52:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T14:52:00+0100</ActueleAankomstTijd>
<Status>VOLGENS-PLAN</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3146</RitNummer>
<Status>VOLGENS-PLAN</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T14:28:00+0100</Tijd>
<Spoor wijziging="false">5</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T14:46:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T14:52:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:22</GeplandeReisTijd>
<ActueleReisTijd>0:22</ActueleReisTijd>
<Optimaal>false</Optimaal>
<GeplandeVertrekTijd>2015-03-17T14:43:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T14:43:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T15:05:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T15:05:00+0100</ActueleAankomstTijd>
<Status>VOLGENS-PLAN</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3548</RitNummer>
<Status>VOLGENS-PLAN</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T14:43:00+0100</Tijd>
<Spoor wijziging="false">7</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T15:00:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T15:05:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:24</GeplandeReisTijd>
<ActueleReisTijd>0:24</ActueleReisTijd>
<Optimaal>true</Optimaal>
<GeplandeVertrekTijd>2015-03-17T14:58:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T14:58:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T15:22:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T15:22:00+0100</ActueleAankomstTijd>
<Status>VOLGENS-PLAN</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3148</RitNummer>
<Status>VOLGENS-PLAN</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T14:58:00+0100</Tijd>
<Spoor wijziging="false">5</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T15:16:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T15:22:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:22</GeplandeReisTijd>
<ActueleReisTijd>0:22</ActueleReisTijd>
<Optimaal>false</Optimaal>
<GeplandeVertrekTijd>2015-03-17T15:13:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T15:13:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T15:35:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T15:35:00+0100</ActueleAankomstTijd>
<Status>VOLGENS-PLAN</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3550</RitNummer>
<Status>VOLGENS-PLAN</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T15:13:00+0100</Tijd>
<Spoor wijziging="false">7</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T15:30:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T15:35:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:24</GeplandeReisTijd>
<ActueleReisTijd>0:23</ActueleReisTijd>
<VertrekVertraging>+1 min</VertrekVertraging>
<Optimaal>false</Optimaal>
<GeplandeVertrekTijd>2015-03-17T15:28:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T15:29:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T15:52:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T15:52:00+0100</ActueleAankomstTijd>
<Status>VERTRAAGD</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3150</RitNummer>
<Status>VERTRAAGD</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T15:28:00+0100</Tijd>
<VertrekVertraging>+1 min</VertrekVertraging>
<Spoor wijziging="false">5</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T15:46:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T15:52:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:22</GeplandeReisTijd>
<ActueleReisTijd>0:22</ActueleReisTijd>
<Optimaal>false</Optimaal>
<GeplandeVertrekTijd>2015-03-17T15:43:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T15:43:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T16:05:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T16:05:00+0100</ActueleAankomstTijd>
<Status>VOLGENS-PLAN</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3552</RitNummer>
<Status>VOLGENS-PLAN</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T15:43:00+0100</Tijd>
<Spoor wijziging="false">7</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T16:00:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T16:05:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:24</GeplandeReisTijd>
<ActueleReisTijd>0:24</ActueleReisTijd>
<Optimaal>false</Optimaal>
<GeplandeVertrekTijd>2015-03-17T15:58:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T15:58:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T16:22:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T16:22:00+0100</ActueleAankomstTijd>
<Status>VOLGENS-PLAN</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3152</RitNummer>
<Status>VOLGENS-PLAN</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T15:58:00+0100</Tijd>
<Spoor wijziging="false">5</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T16:16:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T16:22:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
<ReisMogelijkheid>
<AantalOverstappen>0</AantalOverstappen>
<GeplandeReisTijd>0:22</GeplandeReisTijd>
<ActueleReisTijd>0:22</ActueleReisTijd>
<Optimaal>false</Optimaal>
<GeplandeVertrekTijd>2015-03-17T16:13:00+0100</GeplandeVertrekTijd>
<ActueleVertrekTijd>2015-03-17T16:13:00+0100</ActueleVertrekTijd>
<GeplandeAankomstTijd>2015-03-17T16:35:00+0100</GeplandeAankomstTijd>
<ActueleAankomstTijd>2015-03-17T16:35:00+0100</ActueleAankomstTijd>
<Status>VOLGENS-PLAN</Status>
<ReisDeel reisSoort="TRAIN">
<Vervoerder>NS</Vervoerder>
<VervoerType>Intercity</VervoerType>
<RitNummer>3554</RitNummer>
<Status>VOLGENS-PLAN</Status>
<ReisStop>
<Naam>Utrecht Centraal</Naam>
<Tijd>2015-03-17T16:13:00+0100</Tijd>
<Spoor wijziging="false">7</Spoor>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Bijlmer ArenA</Naam>
<Tijd>2015-03-17T16:30:00+0100</Tijd>
</ReisStop>
<ReisStop>
<Naam>Amsterdam Zuid</Naam>
<Tijd>2015-03-17T16:35:00+0100</Tijd>
<Spoor wijziging="false">4</Spoor>
</ReisStop>
</ReisDeel>
</ReisMogelijkheid>
</ReisMogelijkheden>"

	return output;
}