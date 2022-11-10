# twitter_css_bootstrap_project

Uppgiften går ut på att använda sig utav Bootstrap samt egen CSS för att bygga en sida som **liknar** Twitter (hemskärm vid inloggat läge). Se bild nedan.

- Vi behöver inte använda oss utav ett extern ikonbibliotek, emojis går bra7
- Vi är inte ute efter en pixel perfect kopia, utan snarare att alla element ska finnas på plats
- Kreativitet uppmuntras

# Skapa högra delen av Twitterkopia

Använde oss av elementet aside då sidan ska ligga separat till höger. I detta element har vi använt bootstrap för att bestämma bakgrundsfärg. Vi satte bredden av elementet och fixerar den högra delen efter att man scrollar ned en liten bit. Denna del försvinner när bredden blir mindre än 767 pixlar bred.

# Skapa sökruta

Jag har skapat en sökruta uppe till höger. Jag har försökt få in ett förstoringsglas till vänster i sökrutan likt Twitter men har inte lytckats med det. Förstoringsglaset ligger ovanför sökrutan.
Formen på sökrutan har gjorts pillerformad och är tänkt att vara lika bred som den högra delen med width="100%" men funkar inte.
Vi har lagt in en placeholder med texten Search.

# lista

Sedan har vi gjort en lista över trender just nu. Vi har gjort övre och undre kanten av listan rundad och tagit bort borders. VI alde in de tre prickarna son knappar och styleade dem med bootstrap.

# Who to follow

Här har vi gjort profilbilderna runda och ändrat storlek på dem med bootstrap.

# Svagheter bootstrap

*Finns inte så många färger
*Svårare att memorera kommandon när de ofta består av en bokstav.

Jag valde att arbeta med Aside-elementet. Jag började med att skapa en sökruta som ligger uppe till höger. Det tog ett tag att lyckas få den som den är och Jag lyckades inte riktigt få den lika bred som nedan element som jag hade tänkt. Jag lyckades inte få in förstoringsglaset på rätt plats heller utan den ligger ovanför sökrutan.
Sedan skapade jag två lstor med trender just nu och förslag på personer man kan följa. Jag skapade dessa som listor för att kunna få punkterna att ligga till höger.

### Vi började med att skapa en struktur för sidan. Vi kom fram till att dela upp sidan i nav,main och aside. Vi märkte väldigt snabbt att det var väldigt behändigt med bootstrap. vi gillade starkt klaserna .d-md-none .d-lg-block. det kändes som en komplicerad grej som blev gjord snabbt

### Det var svårt att använda sig utav position relative och absolute. Däremot så fungerade sticky-top väldigt bra. För att positionera allting så har jag använt mig i regel av d-flex för att så innehåll bredvid varandra.

### Det som inte har fungerat för är att bestämma bredden på dessa post sektioner. Jag vill inte att denna del ska vara responsiv eftersom att då får jag problem med att texten flyttar sig.

Svagheter med Bootstrap:

    Finns inte så många färger

    Svårare att memorera kommandon när de ofta består av en bokstav.

    Finns bara nivå 0-5 när det gäller ex padding, margin.

    Bootstrap kan överskrida annan kod pga av att det använder !important, detta kan bli problematiskt.

Vad bör man tänka på kring nästa liknande projekt?

Bootstrap är ett bra verktyg men det finns så mycket mer möjligheter i css, därför kanske man ska använda sig lite mindre av bootstrap i nästkommande projekt och mer css för att få fram det resultatet man strävar efter.
