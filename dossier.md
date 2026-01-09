# Dossier

> **Instructies:**
>
> - Vul dit dossier volledig in en zorg ervoor dat alle links correct zijn
> - In het geval je slechts één olod volgt, verwijder alle inhoud omtrent het andere olod uit dit document
> - Lees [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) om te weten hoe een Markdown-bestand opgemaakt moet worden
> - Verwijder alle instructies (lijnen die starten met >) wanneer je klaar bent

## 📋 Studentgegevens

- **Student:** Miguel Angel Popa
- **Studentennummer:** 202407528
- **E-mailadres:** <miguel.popa@student.hogent.be>
- **GitHub repository:** <[LINK_NAAR_GITHUB_REPO](https://github.com/HOGENT-frontendweb/frontendweb-2526-popamiguelangel)>
- **GitHub repository API:** <[LINK_NAAR_GITHUB_REPO](https://github.com/miguelangelpopa/frontendweb-api-MiguelAngelPopa)>
- **Online versies:**
  - **Back-end:** <[LINK_NAAR_ONLINE_BACKEND](https://frontendweb-2526-popamiguelangel.onrender.com/)>
  - **Front-end:** <[LINK_NAAR_ONLINE_FRONTEND](https://frontendweb-2526-popamiguelangel-1.onrender.com)>
- **Demo:** <[LINK_NAAR_DEMO_VIDEO](https://hogent.cloud.panopto.eu/Panopto/Pages/Sessions/List.aspx?folderID=308e0ca2-a4f9-454c-9425-b3b8013cdff7)>

## 🔐 Logingegevens

> **Instructies:**
>
> - Vul de logingegevens in voor test accounts.
> - Zorg ervoor dat deze accounts representatieve data bevatten.
> - Voeg hieronder eventueel extra accounts toe voor administrators of andere rollen.

### Lokale omgeving

- **E-mailadres**: <popa@clavimial.be>
- **Wachtwoord**: esp52!ro
- **Rol**: admin/Boss

### Online omgeving

- **E-mailadres**: <popa@clavimial.be>
- **Wachtwoord**: esp52!ro
- **Rol**: admin/Boss

## 📖 Projectbeschrijving

> **Instructie:** Beschrijf hier duidelijk en beknopt waarover jouw project gaat. Wat is het doel? Wie is de doelgroep? Welke functionaliteiten biedt het?

Project: Website voor een industrieel renovatiebedrijf

Doel van het project:
Het ontwikkelen van een website die zowel het imago van het bedrijf naar potentiële klanten versterkt als de interne organisatie verbetert. De website dient als professioneel visitekaartje en als werktool voor werknemers.

Doelgroep:

* Interne gebruikers: Zelfstandige werknemers en personeel die hun uren willen bijhouden en snel kunnen communiceren met het management.

* Externe gebruikers: Potentiële klanten die een indruk willen krijgen van het bedrijf, de diensten en eerdere projecten.

Functionaliteiten:
* Urenregistratie: Werknemers kunnen eenvoudig hun gewerkte uren invoeren en beheren.
* Communicatie: Kleine chatfunctie voor directe communicatie tussen werknemers en management.
* Homepage als imago: Professionele presentatie van het bedrijf, de diensten en afgeronde projecten voor toekomstige klanten.

> **Instructie:** Voeg hier een afbeelding van jouw ERD toe en licht de belangrijkste entiteiten en relaties kort toe.

![ERD](root\images\ERD.png)


Belangrijkste Entiteiten:
* User: Het hart van het systeem. Deze entiteit bevat persoonlijke gegevens, inloggegevens en koppelingen naar rollen, locaties en managers.
* Hours: Hier worden de gewerkte uren bijgehouden. Elke invoer is gekoppeld aan een specifieke gebruiker en een project, inclusief start- en eindtijden en een goedkeuringsstatus.
* Project & Location: Projecten slaan informatie op over de taken die worden uitgevoerd, terwijl de Location entiteit adresgegevens bevat die zowel aan gebruikers als aan projecten gekoppeld kunnen worden.
* Message & Chat: Een uitgebreid communicatiesysteem bestaande uit Message en Chat (voor real-time groeps- of individuele gesprekken via ChatParticipant).

Belangrijkste Relaties:
1. Uren en Projecten (1:N)
   * Een Project kan vele Hours records hebben ($1 \dots 0..N$), maar elk uur-record hoort bij precies één project. Dit stelt de applicatie in staat om rapportages per project te genereren.

2. Gebruiker en Beheer (1:N Zelf-relatie)
   * De User entiteit heeft een relatie met zichzelf via managerId. Een manager kan meerdere gebruikers onder zich hebben, terwijl een medewerker naar één specifieke manager verwijst.

3. Messaging & Ontvangers (1:N)
   * De relatie tussen Message en MessageRecipient zorgt ervoor dat één bericht naar meerdere gebruikers gestuurd kan worden. De status isRead wordt per individuele ontvanger bijgehouden.

4. Rollen en Autorisatie (1:N)
   * Elke User is gekoppeld aan een Role. Dit bepaalt waarschijnlijk wie uren mag goedkeuren (approvedBy in de Hours tabel) en wie alleen uren mag indienen.
## ✅ Ontvankelijkheidscriteria

- [X] Het project van Web Services voldoet aan **alle** ontvankelijkheidscriteria zoals beschreven in de rubrics.
- [X] Het project van Front-end Web Development voldoet aan **alle** ontvankelijkheidscriteria zoals beschreven in de rubrics.

## 🚀 Extra technologieën

> **Instructie:** Beschrijf welke extra technologieën je hebt gebruikt. Vermeld waarom je deze hebt gekozen.

### Front-end Web Development

- <[LINK_NAAR_NPM_PACKAGE](https://www.npmjs.com/package/recharts)>
  - Recharts
    * Ingezet om de gewerkte uren van werknemers visueel weer te geven in een interactieve staafgrafiek (component WorkerHours) met een week- of maandweergave. Zo krijgen gebruikers in één oogopslag inzicht in hun geregistreerde uren.

### Web Services

- <LINK_NAAR_NPM_PACKAGE>
  - [Reden van keuze]
- ...

## 🤔 Reflectie

> **Instructie:** Reflecteer eerlijk over je leerproces en het project. Dit helpt zowel jezelf als de docenten om de cursus te verbeteren.

**Wat heb je geleerd?**

Tijdens dit project is mijn begrip van een volledige full‑stack workflow enorm gegroeid: van het uittekenen van een ERD en het opzetten van database‑migraties in Drizzle tot het bouwen van een REST‑API met NestJS en die laten samenwerken met de frontend. Ik heb ook gemerkt dat er dingen zijn die niets met programmeren te maken hebben, maar minstens even belangrijk zijn, zoals kiezen met wie je samenwerkt, omdat een situatie van de ene dag op de andere volledig kan veranderen.

**Wat vond je goed aan dit project?**

Om eerlijk te zijn ben ik vooral trots op de homepage, die vind ik echt mooi gelukt. Ik was al gewend om eenvoudige websites te maken met enkel front‑end en soms een contactformulier in PHP, maar dit voelt veel professioneler aan. Ik vond het ook heel interessant om eens echt aan de back‑end te werken en te zien hoe alles samenkomt met de database en de API.

**Wat zou je anders doen?**

In de toekomst zou ik waarschijnlijk liever alleen werken of met iemand in wie ik heel veel vertrouwen heb, omdat ik nu heb meegemaakt hoe lastig het wordt als dat vertrouwen wegvalt. Ik zou ook proberen om elke dag iets kleins te doen aan het project, want in de laatste twee weken had ik tegelijk griep én een laptop die door een hardwareprobleem zichzelf begon vol te typen, en dat heeft de druk richting de deadline serieus verhoogd.

**Wat waren de grootste uitdagingen?**

 De aansluiting tussen Drizzle‑schema, migraties, seed‑data en de externe MySQL‑databank in het VIC (fouten in DATABASE_URL of migraties breken meteen alles).  
 
Het correct configureren van Docker en Render (env‑variabelen, CORS, VITE_API_URL, DATABASE_URL) zodat front‑end en back‑end zowel lokaal als online met elkaar konden praten zonder CORS‑fouten of connectieproblemen naar de VIC‑database.

**Wat zou je behouden aan de cursus?**

De combinatie van een uitgewerkt voorbeeldproject met duidelijke stappen (schema, seed, auth, Docker, Render) én de vrijheid om een eigen case uit te werken, werkt motiverend.

**Wat zou je toevoegen/aanpassen?**

Een korte, verplichte tussenstap waarin iedereen al halverwege het semester zijn backend eens op Render en de VIC‑databank moet deployen, zou veel stress op het einde wegnemen.