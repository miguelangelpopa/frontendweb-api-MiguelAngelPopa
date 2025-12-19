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

- **E-mailadres**: <test@example.com>
- **Wachtwoord**: testpassword
- **Rol**: admin/user

### Online omgeving

- **E-mailadres**: <test@example.com>
- **Wachtwoord**: testpassword
- **Rol**: admin/user

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

- [ ] Het project van Web Services voldoet aan **alle** ontvankelijkheidscriteria zoals beschreven in de rubrics.
- [ ] Het project van Front-end Web Development voldoet aan **alle** ontvankelijkheidscriteria zoals beschreven in de rubrics.

## 🚀 Extra technologieën

> **Instructie:** Beschrijf welke extra technologieën je hebt gebruikt. Vermeld waarom je deze hebt gekozen.

### Front-end Web Development

- <LINK_NAAR_NPM_PACKAGE>
  - [Reden van keuze]
- ...

### Web Services

- <LINK_NAAR_NPM_PACKAGE>
  - [Reden van keuze]
- ...

## 🤔 Reflectie

> **Instructie:** Reflecteer eerlijk over je leerproces en het project. Dit helpt zowel jezelf als de docenten om de cursus te verbeteren.

**Wat heb je geleerd?**

[Beschrijf je belangrijkste leermoment...]

**Wat vond je goed aan dit project?**

[Positieve aspecten...]

**Wat zou je anders doen?**

[Verbeterpunten voor jezelf...]

**Wat waren de grootste uitdagingen?**

[Moeilijkheden die je bent tegengekomen...]

**Wat zou je behouden aan de cursus?**

[Wat werkt goed...]

**Wat zou je toevoegen/aanpassen?**

[Suggesties voor verbetering...]
