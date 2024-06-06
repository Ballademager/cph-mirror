import { useState } from "react";
import Modal from "./Modal";
import { clsx } from "../javascript/utils";

const Button = ({ children, selected, onClick, noGrow, className }) => (
  <button
    className={clsx(
      "py-2 font-medium",
      {
        "flex-1": !noGrow,
        "bg-cph-white": selected,
        "bg-grey-lighter border-b border-grey-mid": !selected,
      },
      className,
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default function ParkingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);

  return (
    <>
      <Modal
        isOpen={isOpen}
        doClose={false}
        close={() => setIsOpen(false)}
        cardClasses="max-w-[600px] p-0 overflow-hidden"
      >
        <div className="flex w-full items-stretch">
          <Button selected={page === 0} onClick={() => setPage(0)}>
            CPH Parkering
          </Button>
          <div className="w-[1px] bg-grey-mid" />
          <Button selected={page === 1} onClick={() => setPage(1)}>
            SteamRex Aps
          </Button>
          <div className="w-[1px] bg-grey-mid" />
          <Button selected={page === 2} onClick={() => setPage(2)}>
            Din fortrydeiseret
          </Button>
          <div className="w-[1px] bg-grey-mid" />
          <Button
            noGrow
            onClick={() => setIsOpen(false)}
            className="w-[41px] flex justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z"
              />
            </svg>
          </Button>
        </div>

        <div className="p-6 pt-2 overflow-auto max-h-[80vh]">
          {page === 0 && page1.trim()}
          {page === 1 && page2.trim()}
          {page === 2 && page3.trim()}
        </div>
      </Modal>

      <div
        className="flex flex-col shadow-card hover:shadow-cardHover transition p-3 justify-center rounded-xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <p className="font-bold mt-2">
          Læs om vores købsbetingelser for CPH Parkering, SteamRex ApS og din
          fortrydelsesret.
        </p>
        <p className="text-small">
          Linket her åbner en pop-up boks i dit browservindue.
        </p>
      </div>
    </>
  );
}

const page1 = `GENERELT

Disse handelsbetingelser gælder, når du reserverer parkering i Københavns Lufthavn online. Handelsbetingelserne gælder derfor ikke, når du blot kører ind i et af vores parkeringsanlæg uden at have reserveret plads i forvejen.  

Vi anbefaler dig at læse handelsbetingelserne igennem, inden du reserverer din parkeringsplads.

Du skal være særligt opmærksom på følgende betingelser, når du reserverer parkering hos Københavns Lufthavn.

Al parkering i Københavns Lufthavns parkeringsanlæg sker på eget ansvar, medmindre andet specifikt fremgår af disse handelsbetingelser.
Priser og gebyrer for parkering i Københavns Lufthavn fremgår altid af https://www.cph.dk/parkering-transport/priser-produkter. Her kan du også læse mere om, hvilke parkeringsprodukter vi tilbyder. 
Vi trækker betalingen for din parkering og evt. andre ydelser, når du har færdiggjort din reservation. 
Når du reserverer din parkering online, har du som forbruger ret til at fortryde din reservation inden for 14 dage. Fortrydelsesfristen udløber 14 dage efter den dag, hvor aftalen blev indgået. Dette kan du læse mere om i pkt. 7. 
Hvis du reserverer parkering til påbegyndelse inden fortrydelsesfristens udløb, anses det som din accept af, at din parkeringsperiode påbegyndes inden fortrydelsesfristens udløb. Hvis din parkeringsperiode også afsluttes inden fortrydelsesfristens udløb, anerkender du, at fortrydelsesfristen ophører, når parkeringsperioden er afsluttet. 
Du har mulighed for at benytte dig af gratis afbestilling, hvilket giver dig mulighed for at aflyse din reserverede parkering helt frem til 2 timer før det reserverede indkørselstidspunkt (hvor din parkeringsperiode ellers skulle være begyndt). Denne kan du læse mere om under pkt. 9.
Det er en forudsætning for, at du kan forlade vores parkeringsanlæg, at du har betalt for den tid, du har holdt parkeret. Vi forbeholder os derfor retten til at tilbageholde din bil, indtil du har betalt din parkeringsafgift. Dette kan du læse mere om i pkt. 3.9. Hvis du f.eks. har mistet din pung, kan du henvende dig til Driftscentret via ”I-knappen” placeret på betalingsautomaten.
Vi forbeholder os desuden retten til at benytte hjulspærre og pålægge dig en afgift, hvis du ikke overholder vores ordensbestemmelser, skiltning mv. i parkeringsanlæggene, f.eks. hvis du har parkeret på en handicapplads eller uden for de afmærkede parkeringsbåse. Har du endvidere parkeret et sted, som er til gene for andre personer, forbeholder vi os retten til at flytte din bil. Dette kan du læse mere om i pkt. 12.  
CPH kan til enhver tid ændre handelsbetingelserne for onlinereservation af parkering ved at opdatere denne side.

Handelsbetingelserne er senest ændret 06. november 2023. 

Hvem indgår du aftale med
Onlinereservation
Pris og betalingsbetingelser
Parkering
We Park You Fly
Weekendparkering
Fortrydelsesret (gælder kun forbrugere)
Ændring af reservation
Gratis afbestilling
Forsinkelse
Reklamation
Ansvar
Force majeure
Sikker e-handel
Persondata
Klageadgang
Lovvalg og værneting


1. HVEM INDGÅR DU AFTALE MED

1.1. Når du reserverer parkering via https://www.cph.dk/parkering-transport indgår du en aftale med Københavns Lufthavne A/S (”CPH”), Box 74, Lufthavnsboulevarden 6, 2770 Kastrup, Danmark med CVR-nr. 14 70 72 04, som udbyder parkering i Københavns Lufthavn, og disse handelsbetingelser finder anvendelse på din reservation.

1.2. CPH kan kontaktes på ovennævnte adresse, telefonnummer 32 31 32 31 eller på mailadressen kundeservice@cph.dk. CPH’s hjemmeside er www.cph.dk.

1.3. Hvis du i tillæg til din reservation af parkering bestiller andre ydelser, såsom bilpleje, indgår du en aftale med den pågældende virksomhed, som udbyder ydelsen. CPH hæfter ikke for krav i denne sammenhæng. Har du spørgsmål eller andre henvendelser, herunder klager over ydelsen, kan de derfor alene rettes mod den pågældende virksomhed. Deres kontaktoplysninger kan du finde i din ordrebekræftelse samt her.

2. ONLINERESERVATION

2.1. Du kan reservere en parkeringsplads online på CPH’s reservationsside, https://www.cph.dk/parkering-transport. Du kan kun reservere én parkeringsplads ad gangen i én sammenhængende parkeringsperiode. Hvis du forlader parkeringsanlægget i løbet af din parkeringsperiode og efterfølgende kører ind igen, betragtes det som en ny parkering, der takseres i overensstemmelse med de til enhver tid gældende drive-in takster for det pågældende parkeringsanlæg.

2.2. Ved reservationen skal du vælge parkeringsanlæg, prisniveau samt parkeringsperioden. Du kan læse mere om, hvordan reservation samt parkering foregår via https://www.cph.dk/parkering-transport/saadan-parkerer-du.

2.3. Du skal reservere din parkeringsplads senest 1 time før, du påbegynder din parkering.

2.4. En parkeringsplads kan ikke reserveres i mere end 14 uger ad gangen, når du reserverer online. 

2.5. Du kan forlænge din parkeringsperiode, hvis du har reserveret parkering i mindre end 14 uger via http://www.cph.dk/parkering/manage. Dette forudsætter, at der er en ledig parkeringsplads i det valgte parkeringsanlæg i hele den periode, der ønskes forlænget. Det er ikke muligt at forlænge en igangværende parkering online. 

2.6. Når din reservation er gennemført, bekræftes dette ved en printbar kvittering på skærmen, hvor dit reservationsnummer og kvittering for betalingens gennemførelse fremgår. Kvitteringen indeholder også den QR-kode, du kan anvende, når du kører ind i det valgte parkeringsanlæg, jf. pkt. 4.3. Du får desuden en ordrebekræftelse sendt til den oplyste e-mail. E-mailen indeholder også QR-koden. CPH opbevarer disse oplysninger, men du opfordres til selv at printe ordrebekræftelsen samt gemme denne. En kopi af ordrebekræftelsen kan genfremsendes via http://www.cph.dk/parkering/manage.

2.7. Når du har modtaget ordrebekræftelsen, er der indgået en endelig aftale mellem CPH og dig, og din reservation er herefter bindende, jf. dog pkt. 7 vedrørende fortrydelse.

3. PRIS OG BETALINGSBETINGELSER

3.1. Priserne for parkering er i danske kroner inkl. moms og andre afgifter. De til enhver tid gældende priser fremgår af CPH’s hjemmeside, https://www.cph.dk/parkering-transport/priser-produkter.   

3.2. Prisen, som du skal betale for din reservation, afhænger af det valgte parkeringsanlæg, samt antallet af dage, som parkeringspladsen reserveres og om du har valgt ekstra services.

3.3. Du kan betale for din parkering med følgende betalingsmidler:

Dankort
Visakort
Mastercard
Maestro
American Express
MobilePay
3.4. Din betaling trækkes, når du har færdiggjort din reservation i henhold til pkt. 2.6.

Hvis du i tillæg til din reservation af parkering bestiller andre ydelser, såsom bilpleje, trækkes betalingen for disse samtidig med betalingen for din reservation.

3.5. I forbindelse med at betalingstransaktionen gennemføres, vil dine betalingsoplysninger blive gemt, indtil de enkelte betalingstransaktioner er gået igennem. Dine betalings- og kortoplysninger gemmes hos CPH’s valgte PCI (Payment Card Industry - Data Security Standard) certificerede samarbejdspartner. Oplysningerne opbevares derfor i et sikkert PCI-certificeret miljø, som lever op til internationale sikkerhedsstandarder, indtil betalingstransaktionerne er gennemført.

3.6. Hvis du afhenter din bil inden parkeringsperiodens udløb, uanset årsag, refunderes du ikke for den periode, hvor parkeringspladsen ikke er blevet benyttet, medmindre du er berettiget til at fortryde reservationen, jf. pkt. 7 vedrørende fortrydelse.

3.7. Hvis du ikke afhenter din bil senest 4 timer efter parkeringsperiodens udløb, uanset årsag, takseres du i overensstemmelse med de til enhver tid gældende drive-in takster for det pågældende parkeringsanlæg, indtil du afhenter bilen. Denne yderligere betaling opkræves i forbindelse med udkørsel af parkeringsanlægget.

3.8. Har du parkeret på en sådan måde, at du optager to parkeringspladser, forbeholder vi os retten til at opkræve dig prisen for to parkeringspladser i den periode, du har holdt parkeret. 

3.9. Det er en forudsætning for, at du kan forlade vores parkeringsanlæg, at du har betalt for den tid, du har holdt parkeret. Vi forbeholder os derfor retten til at tilbageholde din bil, indtil du har betalt din parkeringsafgift. Kan du ikke betale for parkeringsafgiften, uanset årsag, skal du henvende dig til Driftscentret via ”I-knappen” placeret på betalingsautomaten. 

3.10. CPH tager forbehold for trykfejl, herunder fejl i priser, prisændringer og tekniske opdateringer.

4. PARKERING

4.1. Når din reservation er bekræftet, stiller CPH én uspecificeret parkeringsplads i Københavns Lufthavn til rådighed for dig på det reserverede tidspunkt og i det valgte parkeringsanlæg.

Parkeringspladsen må alene anvendes til parkering af én personbil eller én varevogn under 3.500 kg med en maksimal højde på 2,20 m. Parkeringspladsen må således ikke anvendes til parkering af f.eks. lastbiler eller tilsvarende.

4.2. Når du har reserveret en parkeringsplads i et bestemt parkeringsanlæg, er du sikret en plads i dét parkeringsanlæg, selvom parkeringsanlægget fremstår som fuldt optaget. Du skal derfor blot køre ind. Hvis du har problemer med indkørsel, er du velkommen til at kontakte Driftscentret via ”I-knappen” placeret på betalingsautomaten. 

4.3. Når du kører ind i parkeringsanlægget, kan du enten anvende automatisk nummerpladegenkendelse eller den QR-kode, som findes i din ordrebekræftelse.

Hvis du ønsker at anvende automatisk nummerpladegenkendelse ved ind- og udkørsel af parkeringsanlægget, skal du angive din nummerplade i forbindelse med din reservation af parkering.

Alternativt kan du scanne QR-koden, som findes i din ordrebekræftelse - enten elektronisk via din smartphone eller med en printet udgave af din ordrebekræftelse. Har du glemt QR-koden, kan du kontakte Driftscentret via ”I-knappen” placeret på betalingsautomaten. Du skal også anvende QR-koden, når du forlader parkeringsanlægget efter endt parkeringsperiode.

4.4. Din parkeringsperiode begynder, når du kører ind i parkeringsanlægget (dog altid senest på det tidspunkt for indkørsel, som du har valgt i forbindelse med reservationen) og slutter, når du kører ud af parkeringsanlægget (eller ved udløbet af din reserverede parkeringsperiode, hvis du er udeblevet). Har du f.eks. reserveret en parkeringsplads i tre døgn (72 timer) og påbegynder du parkeringen dag 1 klokken 09.00, så slutter din betalte parkeringsperiode dag 4 klokken 09.00, selvom parkeringsperioden var aftalt til at slutte klokken 12.00. 

Hvis du forlader parkeringsanlægget i løbet af din parkeringsperiode og efterfølgende kører ind igen, betragtes det som en ny parkering, der takseres i overensstemmelse med de til enhver tid gældende drive-in takster for det pågældende parkeringsanlæg.

4.5. Reservation af parkering til påbegyndelse inden udløbet af fortrydelsesfristen, jf. pkt. 7, anses som din accept af, at parkeringsperioden påbegyndes inden fortrydelsesfristens udløb. Hvis parkeringsperioden også afsluttes inden fortrydelsesfristens udløb, anerkender du, at fortrydelsesfristen ophører, når parkeringsperioden er afsluttet. 

5. WE PARK YOU FLY

5.1. Dette punkt gælder, hvis du ved reservation af parkering på https://www.cph.dk/parkering-transport har valgt produktet ”We Park You Fly”. 

5.2. For at kunne benytte ”We Park You Fly”, skal din parkeringsperiode som minimum vare to døgn. 

5.3. Når du ankommer til Københavns Lufthavn, kører du ind i det i ordrebekræftelsen angivne parkeringsanlæg, hvor du skal aflevere din bil og bilnøgle til CPH-medarbejderen. Du kører ind i parkeringsanlægget ved anvendelse af den QR-kode, som fremgår af ordrebekræftelsen. Umiddelbart efter indkørsel i parkeringsanlægget skal du stoppe bilen i det afmærkede område til ” We Park You Fly”-kunder med henblik på fotografering af bilen, således at CPH kan dokumentere bilens stand på indleveringstidspunktet. Skilte i parkeringsanlægget viser dig frem til mødestedet, hvor en CPH-medarbejder overtager bilnøglen og bilen. Bilen transporteres efter aflevering til CPH-medarbejderen fra parkeringsanlægget til et andet indhegnet parkeringsområde.

Hvis du blot parkerer din bil i parkeringsanlægget, og ikke afleverer bilnøglen til CPH-medarbejderen i overensstemmelse med dette punkt, skal du inden udkørsel betale en evt. difference i forhold til de til enhver tid gældende drive-in takster for det pågældende parkeringsanlæg, hvor du har parkeret bilen. 

5.4. Ankommer du tidligere eller senere end indkørselstidspunktet oplyst i forbindelse med reservationen, kan du stadig få adgang til det parkeringsanlæg, hvor bilen skal afleveres ved at benytte dig af den QR-kode, som fremgår af ordrebekræftelsen. Skilte i parkeringsanlægget viser dig frem til et afgrænset parkeringsområde, hvor bilen skal parkeres. Bilnøglen skal herefter afleveres hos CPH-medarbejderen i We Park You Fly-kontoret. 

5.5. Ved hjemkomst afhenter du bilnøglen hos We Park You Fly-kontoret i samme parkeringsanlæg, hvor du afleverede bilnøglen, mod forevisning af billedlegitimation i form af enten pas eller kørekort. Ved udkørsel skal du benytte dig af den QR-kode, som fremgår af ordrebekræftelsen.

5.6.  I tilfælde af hjemkomst tidligere eller senere end udkørselstidspunktet oplyst i forbindelse med reservationen, skal CPH Parkering informeres senest 2 timer før forventet udkørselstidspunkt på tlf. +45 53 72 73 52 for at minimere evt. ventetid i forbindelse med afhentning af bilen. 

5.7. I tilfælde af hjemkomst senere end udkørselstidspunktet oplyst i forbindelse med reservationen, takseres du i overensstemmelse med de til enhver tid gældende drive-in takster for anlægskategorien ”Direct” indtil afhentningen af bilen. Denne yderligere parkeringsafgift opkræves i forbindelse med udkørsel af parkeringsanlægget. 

5.8. Hvis parkeringsperioden forkortes, uanset årsag, herunder aflysning af flyafgange, refunderes du ikke for den periode, hvor parkeringspladsen ikke er benyttet, medmindre du er berettiget til at fortryde reservationen, jf. pkt. 7 om fortrydelse. 

5.9. CPH er ansvarlig for bortkomst eller beskadigelse af bilnøgler, mens bilnøglen er i CPH’s besiddelse, og skader på bilen under CPH’s kørsel til/fra parkeringsområdet, hvor bilen opbevares. For så vidt angår skader, der sker, mens bilen holder parkeret i det indhegnede parkeringsområde, henvises der til de almindelige ansvarsbestemmelser i pkt. 12.

5.10. Når du får din bil tilbage, har du pligt til at undersøge bilens stand, inden du forlader CPH’s område. I tilfælde af skader, som følger af CPH’s håndtering af bilen, skal du straks reklamere over for CPH ved at kontakte CPH’s kundeservice.

6. WEEKENDPARKERING

6.1. Dette punkt gælder, hvis du ved reservation af parkering på https://www.cph.dk/parkering-transport har valgt produktet ”Weekendparkering”.

6.2. Reservation af produktet ”Weekendparkering” kan alene ske, hvis indkørsel sker tidligst torsdag og udkørsel sker senest tirsdag. Det er desuden et krav, at parkeringen finder sted hen over enten lørdag eller søndag. 

6.3. Hvis du har bestilt Weekendparkering, men afhenter bilen senere end tirsdag, uanset årsag, vil dette blive betragtet som en almindelig parkering (og ikke en Weekendparkering), hvorfor den fulde parkering vil blive takseret i overensstemmelse med de til enhver tid gældende takster for det pågældende parkeringsanlæg, indtil bilen afhentes. En eventuel difference i parkeringsafgiften, som følge af din tidligere indkørsel og/eller din manglende rettidige afhentning af bilen, vil blive opkrævet i forbindelse med din udkørsel af parkeringsanlægget.

7. FORTRYDELSESRET (gælder kun forbrugere)

7.1. Når du reserverer din parkering online, har du ret til at fortryde din reservation uden begrundelse inden for 14 dage. Fortrydelsesfristen udløber 14 dage efter den dag, hvor aftalen blev indgået.

Udløber fristen på en helligdag, lørdag, grundlovsdag, juleaftensdag eller nytårsaftensdag forlænges fristen til den følgende hverdag. 

7.2. For at udøve fortrydelsesretten skal du sende en e-mail eller et brev til CPH (se kontaktoplysninger i din ordrebekræftelse samt pkt. 1 i disse handelsbetingelser), hvor du skriver, at du fortryder din reservation. Du kan benytte standardfortrydelsesformularen sidst i handelsbetingelserne, men det er ikke obligatorisk.

7.3. Du har også mulighed for at fortryde din reservation på vores hjemmeside ved at tilgå annulleringssiden enten via din ordrebekræftelse eller via "Min reservation" på https://www.cph.dk/parkering-transport. Herefter sender CPH en kvittering for modtagelse af din annullation pr. e-mail.

Du kan ikke fortryde din reservation ved at udeblive fra den.

7.4. Fortrydelsesfristen er overholdt, hvis du sender din meddelelse om, at du fortryder reservationen, inden fortrydelsesfristen er udløbet. 

7.5. Følger af fortrydelse

Hvis du har fortrudt din reservation, refunderer CPH alle betalinger modtaget fra dig, uden unødig forsinkelse og under alle omstændigheder senest 14 dage fra den dato, hvor CPH har modtaget meddelelse om din beslutning om at fortryde denne aftale. CPH gennemfører en sådan tilbagebetaling med samme betalingsmiddel, som du benyttede ved den oprindelige transaktion, medmindre du udtrykkeligt har indvilget i noget andet. Under alle omstændigheder pålægges du ingen former for gebyrer som følge af tilbagebetalingen.

Hvis du udøver din fortrydelsesret efter påbegyndelse af din parkeringsperiode, jf. pkt. 4.4. og 4.5., reduceres din tilbagebetaling med en forholdsmæssig del af den samlede pris for parkering i den reserverede periode, baseret på det antal dage du har holdt parkeret (eller antal dage pladsen har været reserveret til dig ved din udeblivelse), indtil CPH modtog meddelelse om din udøvelse af fortrydelsesretten. 

Hvis du ønsker at fortryde din reservation efter, at parkeringsperioden er påbegyndt, men inden du er kørt ind i parkeringsanlægget, skal du hurtigst muligt kontakte CPH via kontaktoplysningerne i pkt. 1.2.

8. ÆNDRING AF RESERVATION

8.1. CPH giver dig mulighed for at ændre i din reservation for så vidt angår indkørselsdato/-tidspunkt, udkørselsdato/-tidspunkt, produkt og det valgte parkeringsanlæg indtil 3 timer før det aftalte reservationstidspunkt. Hvis du ændrer i din reservation, refunderer CPH det fulde beløb for denne reservation, og du skal herefter betale det fulde beløb for den nye reservation.

9. GRATIS AFBESTILLING

9.1. Gratis afbestilling gælder ved alle reservationer af parkering uanset kategori. Denne giver dig mulighed for at afbestille din reservation frem til 2 timer før det reserverede indkørselstidspunkt. Gratis afbestilling giver dig ret til afbestilling, selvom de 14 dages fortrydelsesret (for forbrugere) er udløbet.

Læs mere om gratis afbestilling her.

9.2. Benytter du gratis afbestilling, får du refunderet det fulde beløb for din reservation.

9.3. For at anvende gratis afbestilling skal du benytte dette link https://www.cph.dk/parkering/manage, og annullere din reservation i bunden af siden.

9.4. Gratis afbestilling berører ikke din fortrydelsesret som forbruger eller andre rettigheder, du har efter lovgivningen.

9.5 Hvis du i tillæg til din reservation af parkering bestiller andre ydelser, såsom bilpleje, er denne ydelse også omfattet af den gratis afbestilling, og din betaling for ydelsen vil blive refunderet.   

10. FORSINKELSE

10.1. Reservationstidspunktet angives i kvitteringen, der vises på din skærm i forbindelse med reservationen, samt i den ordrebekræftelse, som sendes til den e-mail, du har oplyst ved reservation.

10.2. CPH er forpligtet til at stille den reserverede parkeringsplads til din rådighed senest 4 timer før det aftalte reservationstidspunkt.

10.3. Ankommer du efter påbegyndelsen af det aftalte reservationstidspunkt, og er den reserverede parkeringsplads ikke stillet til rådighed, er du i reservationsperioden berettiget til en anden parkeringsplads svarende til eller bedre end den reserverede.

11. REKLAMATION

11.1. Enhver reklamation over parkeringen skal rettes direkte til CPH.

11.2. Reklamation over mangler ved parkeringen skal ske inden for rimelig tid efter, at du har opdaget eller burde have opdaget manglen, dog senest 5 dage efter endt parkering. 

11.3. Hvis CPH ikke kan anvise dig en tilsvarende eller bedre plads, end den, du har reserveret, vil CPH anvise dig en anden, ikke tilsvarende, parkeringsplads mod et afslag i prisen. Kan CPH slet ikke anvise dig en anden plads, er du berettiget til at få parkeringsafgiften retur.

12. ANSVAR

12.1. Nedenstående ansvarsbestemmelser gælder ikke, hvis andet følger af ufravigelige regler i dansk ret.

12.2. Al parkering i CPH’s parkeringsanlæg sker på eget ansvar.

12.3. CPH påtager sig intet ansvar i forbindelse med ulykker, tyveri, skader på personer, biler, udstyr og effekter i bilen, jf. dog pkt. 5.9., når din bil holder parkeret i et af CPH’s parkeringsanlæg. 

12.4. CPH kan ikke gøres ansvarlig for nogen form for indirekte tab eller følgeskader. 

12.5. CPH forbeholder sig retten til at benytte hjulspærre og pålægge en afgift på kr. 500,00 ved din tilsidesættelse af ordensbestemmelser og skiltning mm., herunder hvis du har parkeret uden for de afmærkede parkeringsbåse, optager to parkeringspladser, har parkeret på en handicapplads, eller hvor parkering er til gene for andre personer, herunder andre parkanter og biludlejningsselskaber mv. CPH forbeholder sig endvidere retten til at flytte din bil i ovennævnte tilfælde. 

13. FORCE MAJEURE

13.1. Hvis du ikke kan få adgang til den reserverede parkeringsplads på det aftalte tidspunkt, eller adgang helt udelukkes, som følge af uforudsete forhold, som CPH ikke er herre over, herunder, men ikke begrænset til, krig, mobilisering, terrorhandlinger (herunder trusler om sådanne), brand, strejke, boykot, blokade og lockout (herunder blandt personalet i Københavns Lufthavn), lukning af lufthavnen eller af lufthavnens bagagehåndtering og/eller naturkatastrofer, udsættes din reservation i tilsvarende kalenderdage.

13.2. Hvis du på baggrund af ovenstående ikke kan afhente din bil inden for den reserverede periode, refunderes evt. ekstra betalt parkering som følge heraf.

13.3. CPH kan i øvrigt ikke holdes ansvarlig i tilfælde af force majeure.

14. SIKKER E-HANDEL

14.1. For at sikre en tryg og sikker behandling af dine oplysninger benyttes Norton by Symantec. Norton sikrer kryptering af data, der sendes til og fra hjemmesiden. Se nærmere om Norton på www.norton.com.

15. PERSONDATA

15.1. Vi behandler dine personoplysninger i overensstemmelse med vores privatlivspolitik.

16. KLAGEADGANG

16.1. Du er selvfølgelig altid velkommen til at kontakte CPH, hvis du har klager over den parkering, som du har købt hos CPH. Du kan finde kontaktoplysningerne på din ordrebekræftelse samt i disse handelsbetingelser pkt. 1.2.

16.2. Kan du ikke nå til enighed med CPH, kan du, som forbruger, indgive en klage til Nævnenes Hus, Mæglingsteamet for Forbrugerklager, Toldboden 2, 8800 Viborg, via Klageportalen for Nævnenes Hus, som du finder her.

Mæglingsteamet vil forsøge at løse tvisten ved mediation, og hvis det ikke lykkes at finde en løsning, kan du indbringe klagen for Forbrugerklagenævnet, se mere i pkt. 16.4 nedenfor.

Det er som udgangspunkt en forudsætning for at klage, at ydelsen, som du vil klage over, har kostet mindst 1.110 kr. og højst 100.000 kr. Beløbsgrænserne kan blive ændret. Du skal betale et gebyr for at få klagen behandlet.

16.3. Du kan også anvende EU-Kommissionens onlineklageportal ved indgivelse af en klage. Det er særlig relevant, hvis du er forbruger med bopæl i et andet EU-land. Du kan indgive klagen på følgende link: http://ec.europa.eu/odr. Ved indgivelse af en klage skal du angive CPH’s e-mail adresse kundeservice@cph.dk. 

16.4 Hvis der ikke kan nås en fælles løsning gennem Center for Klageløsning, kan du klage til Forbrugerklagenævnet. Du kan indgive en onlineklage hos Forbrugerklagenævnet via Klageportalen for Nævnenes Hus, som du finder her.

17. LOVVALG OG VÆRNETING

17.1. Enhver aftale indgået mellem dig og CPH under anvendelse af disse handelsbetingelser er underlagt dansk ret, hvis dette er muligt efter gældende ret, og enhver tvist, som måtte opstå, skal indbringes for en kompetent domstol i Danmark.

-O-

Standardfortrydelsesformular

(denne formular udfyldes og returneres kun, hvis fortrydelsesretten gøres gældende)

Til Københavns Lufthavne A/S, Box 74, Lufthavnsboulevarden 6, 2770 Kastrup:

Jeg/vi meddeler herved, at jeg/vi ønsker at gøre fortrydelsesretten gældende i forbindelse med min/vores købsaftale om parkering i Københavns Lufthavn ___________

Bestilt den ___________/reserveret til den ___________

Forbrugerens navn ___________

Forbrugerens adresse ___________

Forbrugerens underskrift ___________ (kun hvis formularens indhold meddeles på papir)

Dato ___________
`;

const page2 = `
Generelle betingelser Forretningsbetingelserne er senest opdateret den
          20-07-2020 Din brug af SteamRex ApS (herefter kaldet ”SteamRex”) og
          Steamrex’ online platform www.steamrex.com (herefter kaldet
          ”Platformen”) betragtes som en accept af SteamRex’
          forretningsbetingelser inklusiv SteamRex’ politik for behandling af
          personoplysninger (Datapolitik) og cookie-politik samt til enhver tid
          øvrigt gældende retningslinjer (samlet kaldet ”Betingelser”). Du
          bekræfter endvidere, at du er fyldt 18 år. Såfremt du ikke kan
          acceptere SteamRex’ Betingelser, må du ikke registrere dig som hverken
          bruger eller ServicePartner på Platformen. SteamRex forbeholder sig
          ret til at ændre Betingelserne. 1. Indledning 1.1. Driften af
          hjemmesiden varetages af SteamRex ApS, CVR. nr. 39314088, Valhøjs alle
          158, 2610 Rødovre, e-mail: info@steamrex.com. 2. Ydelser 2.1.
          SteamRex’ platform faciliterer en bookingfunktion, som gør det muligt
          at booke rengøring af din bil. Selve rengøringen (herefter kaldet
          ”Ydelser”) er outsourcet til SteamRex’ selvstændige ServicePartnere.
          SteamRex og de enkelte ServicePartnere står ikke i et over-
          underordnelsesforhold til hinanden, og ServicePartnere fungerer
          således som selvstændigt virkende tredjemænd. 2.2. Platformen
          indeholder, og giver adgang til, faktuelle oplysninger, som gør det
          muligt for SteamRex at facilitere kontakt mellem brugere af Platformen
          og SteamRex’ ServicePartnere. 2.3. Standard Ydelser omfatter kun
          rengøring af biler, som er almindeligt brugsbeskidte. Er bilen mere
          end almindeligt brugsbeskidt kan der købes tillægsydelser. 3. Om at
          booke Ydelser via Platformen 3.1. Booking, koordinering og betaling af
          ydelser sker til enhver tid udelukkende via Platformen. Support er
          tilgængelig via Support eller e-mail på www.steamrex.com eller
          info@steamrex.com mandag-fredag: kl. 7.30-17.00, weekender/helligdage
          kl. 09.00-15.00 4. Kommunikation 4.1. SteamRex har ret til at
          kommunikere direkte til alle brugere af Platformen i forbindelse med
          levering af Ydelsen via e-mail, telefon, app-notifikationer, sociale
          medier og kommunikations-apps. 5. Fortrydelsesret 5.1. Ved din booking
          giver du dit udtrykkelige samtykke til, at SteamRex’ ServicePartner
          kan gå i gang med at levere Ydelsen, og at fortrydelsesfristen
          ophører, når Ydelsen er leveret. Hvis du fortryder, inden Ydelsen er
          færdigleveret (mens Ydelsen står på), er din ServicePartner berettiget
          til at opkræve fuld betaling for det arbejde, der er forudbestilt ved
          booking. 5.2. Hvis du ønsker at fortryde din booking, skal du logge på
          din konto og annullere den, inden Ydelsen er leveret. Enhver
          annullering skal ske senest 24 timer inden det bestilte
          ankomsttidspunkt. 6. Afbestilling eller ændringer for booket aftale
          6.1. Du kan ændre din aftale ved at kontakte os via e-mail
          (info@steamrex.com). Du har mulighed for at aflyse eller ændre din
          booking frem til 24 timer før den bookede aftale. 6.2. Hvis aftalen
          ikke er afbestilt eller ændret rettidigt, forbeholder SteamRex sig
          retten til at opkræve Ydelsens fulde pris. 7. Nøgler 7.1. Du skal selv
          stå for nøgleoverdragelse i samarbejde med din ServicePartner.
          SteamRex påtager sig ikke noget ansvar for bortkomne nøgler eller
          lignende. 8. Betaling 8.1. Medmindre andet fremgår, skal brugere af
          Platformen følge de til enhver tid gældende retningslinjer for booking
          og betaling af Ydelser. Bruger og ServicePartner kan ikke fravige de
          priser, der er fastsat af SteamRex. Enhver omgåelse medfører
          øjeblikkelig eksklusion fra Platformen. 8.2. Dine kortoplysninger
          bliver håndteret af QuickPay, som har det højeste sikkerhedsniveau
          inden for online betalingsløsninger. SteamRex har således ikke adgang
          til dine kortoplysninger og kan ikke gøres ansvarlig for eventuelt
          misbrug af dine kortoplysninger. 8.3. Du kan slette, forny eller ændre
          dit kort tilknyttet din profil under menuen konto. 8.4. Når Ydelserne
          er udført, fremsendes elektronisk betalingslink via e-mail, sms eller
          lign. Af linket fremgår dét beløb som blev oplyst ved booking af
          Ydelsen inklusiv eventuelle tilvalg foretaget ved gennemgang af bil,
          total prisen. 8.5. Kvittering for den betalte ordre, kan downloades
          via betalingslink umiddelbart efter betaling. Den totale pris for den
          købte ydelse fremgår af din kvittering. Der er ingen ekstra gebyrer ud
          over den angivne totalpris. 8.6. SteamRex accepterer kortbetaling via
          fx Visa, Visa/Dankort, Visa Electron og Mastercard, samt betaling via
          MobilePay. 9. Skader og Forsikring 9.1. En ServicePartner hyret gennem
          Platformen er dækket af forsikring i tilfælde af et skader/uheld på
          arbejdsstedet. Bemærk at skader på ruder som f.eks. stenslag skal
          angives når du foretager en bestilling. 9.2. SteamRex garanterer ikke
          for eventuelle lakskader i forbindelse med affoliering af biler. 10.
          Reklamation 10.1. SteamRex garanterer, at de leverede ydelser lever op
          til SteamRex’ beskrivelser af ydelserne i tilbud, aftale eller
          leverance, jf. www.steamrex.com. 10.2. Kunden skal straks ved
          modtagelse af Ydelsen undersøge, om ydelsen lever op til de aftalte
          specifikationer. 10.3. Såfremt kunden bliver opmærksom på, at det
          ydelsen er mangelfuld eller fejlbehæftet, skal kunden straks give
          meddelelse til SteamRex herom. 10.4. Reklamation over leveret Ydelse
          skal ske via e-mail til info@steamrex.com, med beskrivelse af
          reklamationen, og vedhæftet minimum 3 digitale billeder, som på god og
          tydelig vis visualiserer problemet. 10.5. SteamRex og SteamRex’
          Servicepartnere har ret til, at forsøge at afhjælpe eventuelle fejl og
          mangler. 10.6. I øvrigt henvises til principperne i købeloven. 11.
          Opsigelse/framelding 11.1. Du kan få slettet alle dine informationer
          ved at kontakte SteamRex på e-mail, brev, telefon eller via
          Platformen. Du modtager herefter en bekræftelse af din opsigelse på
          e-mail. Hvis du skriver til os på e-mail, får du bekræftelse i løbet
          af to arbejdsdage. Der gælder dog almindelige afbestillingsvilkår jf.
          punkt 8. 11.2. SteamRex kan til enhver tid opsige eller suspendere din
          ret til at anvende Platformen ved at give dig skriftlig meddelelse.
          12. Forbud mod direkte eller skjult markedsføring på Platformen 12.1.
          Direkte eller skjult markedsføring på Platformen fra brugere på egne
          eller andres vegne er ikke tilladt. Enhver handling i strid med dette
          medfører øjeblikkelig suspension fra Platformen. 13. Cookies. 13.1.
          SteamRex bruger cookies og andre identifikationsteknologier på vores
          Platform, mobilapplikationer, elektroniske kommunikationsmedier til en
          række formål, bl.a. til at verificere brugere, huske brugerpræferencer
          og -indstillinger, analysere trafikken og tendenser på webstedet og
          generelt til at forstå online adfærd og -interesser hos de mennesker,
          der bruger vores Platform. Her kan du læse mere om de typer af
          cookies, vi benytter, hvorfor vi bruger dem, og hvordan du kan udføre
          dine valg. 13.2. Du har ret til at vælge, om du vil acceptere cookies
          eller ej. De er dog en vigtig del af, hvordan vores Platform fungerer,
          så du bør være opmærksom på, at hvis du vælger at afvise eller fjerne
          cookies, kan det påvirke Platformens tilgængelighed og funktion. 13.3.
          De fleste webbrowsere er som standard indstillet til at acceptere
          cookies. Hvis du ønsker det, kan du normalt vælge at indstille din
          browser til at fjerne eller afvise browser cookies. For at gøre dette,
          skal du følge de instruktionerne i browseren, der normalt findes under
          menuen „Hjælp“ eller „Indstillinger“. Nogle eksterne parter giver også
          mulighed for at afvise deres cookies ved at klikke direkte på
          fravalgslinket. Vi har angivet de tilfælde, hvor det er muligt i
          tabellen ovenfor. 14. Lovvalg og værneting 14.1. SteamRexs betingelser
          er undergivet dansk ret. Alle aktiviteter mellem SteamRex, dets
          brugere samt ServicePartnere anses for udført i Danmark. 14.2. Tvister
          skal afgøres ved Københavns Byret. 15. Erhvervsaftaler og abonnement
          mv. Nærværende betingelser er gældende medmindre anden aftale er
          indgået mellem kunde og SteamRex. Ændringer Vi forbeholder os ret til
          efter eget skøn at ændre eller erstatte disse Betingelser til enhver
          tid. Hvis en ændring er væsentlig, vil vi forsøge at give mindst 30
          dages varsel forud for, at eventuelle nye Betingelser træder i kraft.
          Hvad der udgør en væsentlig ændring vil blive fastlagt efter SteamRex’
          eget skøn. Hvis du fortsat tilgår eller bruger vores Tjeneste efter
          disse ændringer træder i kraft, accepterer du at være bundet af de nye
          Betingelser. Hvis du ikke accepterer de nye Betingelser, skal du
          stoppe med at bruge Tjenesten. Datapolitik/personoplysninger Hos
          SteamRex passer vi godt på dine data, og deler dem aldrig med andre,
          med mindre, du har givet os lov, eller der er et andet retligt
          grundlag for behandlingen af dine personoplysninger. Det kan
          eksempelvis være SteamRexs opfyldelse af en retlig forpligtelse, eller
          en opfyldelse af en aftale med dig. Vi respekterer dine personlige
          oplysninger. Vi har aldrig solgt og vil aldrig sælge dem til
          tredjeparter. Vores politik er, at vi udelukkende bruger dine data til
          at give dig den bedste og mest relevante købsoplevelse, så vi kan gøre
          din hverdag nemmere, Vi gør derudover alt for at sikre, at brugen af
          dine data bliver mere gennemskuelig for dig. I denne privatlivspolitik
          beskrives, hvordan SteamRex indsamler og bruger de personoplysninger,
          som du efterlader dig og/eller afgiver, når du besøger vores
          hjemmeside og anvender de forskellige services og funktioner, som vi
          tilbyder. 1. Du skal oprette dig som bruger på Platformen med en
          privat konto til eget brug for at booke en Ydelse. Du er ikke
          forpligtiget til at dele dit password eller lignende. Du er fuldt
          ansvarlig for de aktiviteter, som sker via din brugerprofil og konto.
          SteamRex fraskriver sig ethvert ansvar i den forbindelse. Hvis du får
          mistanke om, at der har været uautoriseret brug af din konto på
          Platformen, skal du øjeblikkeligt kontakte SteamRex. Hvis du afgiver
          personoplysninger om andre end dig selv, opfordrer vi dig til først at
          indhente samtykke fra disse personer til afgivelse af oplysningerne.
          2. SteamRex registrerer og behandler ingen følsomme personoplysninger.
          Vi indsamler og behandler typisk følgende typer af oplysninger: Et
          unikt ID og tekniske oplysninger om din computer, tablet eller
          mobiltelefon, dit IP-nummer, geografisk placering, samt hvilke sider
          du klikker på (interesser). I det omfang du selv giver eksplicit
          samtykke hertil og selv indtaster informationerne behandles desuden:
          Navn, telefonnummer, e-mail, adresse og betalingsoplysninger. Det vil
          typisk være i forbindelse med oprettelse af login eller ved køb. 3.
          For at blive bruger på Platformen skal du indtaste følgende
          oplysninger, som du ved oprettelsen giver SteamRex samtykke til at
          registrere og behandle: Navn, telefonnummer, e-mail. Vi foretager
          registreringen af dine personoplysninger med det formål, at kunne
          levere Ydelsen til dig. 4. SteamRex indsamler de oplysninger, du giver
          direkte til os, såsom når du opretter eller redigerer din konto,
          anmoder om Ydelser, kontakter kundesupport eller på anden måde
          kommunikerer med os. Disse oplysninger kan omfatte: e-mail,
          telefonnummer, betalingsmetode, Ydelser, bookingmeddelser og andre
          oplysninger, som du vælger at give til os i forbindelse med oprettelse
          af din profil. 5. Oplysninger om brug og præferencer: Vi indsamler
          oplysninger om, hvordan du interagerer på Platformen ved booking af
          Ydelser, udtrykte præferencer og valgte indstillinger. I nogle
          tilfælde indsamler vi oplysninger ved hjælp af cookies og lignende
          teknologier, der opretter og vedligeholder unikke identifikatorer. Du
          kan læse mere i vores erklæring herom på hjemmesiden under
          betingelser. Vi kan også indsamle oplysninger fra samarbejdspartnere,
          applikationer, sociale medier og lignende. 6. Du giver samtykke til at
          modparten, i de på platformen formidlede opgaver, kan afgive
          anmeldelser. For at sikre, at anmeldelser er relevante og valide,
          foretager SteamRex løbende stikprøvekontrol heraf. 7. Log-oplysninger:
          Når du anvender Platformen, indsamler vi server-logs, der kan omfatte
          oplysninger såsom IP-adresse, adgangsdato og -tidspunkt,
          app-funktioner eller viste sider, app-nedbrud og andre
          systemaktiviteter, browsertype samt det tredjeparts websted eller
          tjenesteydelse, du benyttede, før du interagerede med vores Platform.
          8. Brug af oplysninger. Vi bruger de oplysninger, vi indsamler om dig,
          til at levere, vedligeholde og forbedre vores Platform, herunder for
          eksempel muliggøre betalinger, sende kvitteringer, facilitere Ydelser
          og evt. andre produkter, som du anmoder om (og sende relaterede
          oplysninger), udvikle nye funktioner, yde kundesupport til dig og
          Steamere, udvikle sikkerhedsfunktioner, godkende brugere og sende
          produktopdateringer samt administrative meddelelser, udføre interne
          transaktioner for eksempelvis at forebygge svindel med og misbrug af
          Platformen, finde softwarefejl og operationelle problemer og overvåge
          samt analysere tendenser i aktiviteter og brug. Vi kan endvidere bruge
          oplysningerne til at muliggøre kommunikation mellem dig og en Steamer
          samt sende beskeder til dig, som vi mener kan have din interesse,
          herunder oplysninger om produkter, tjenesteydelser, reklamekampagner,
          og nyheder fra SteamRex. 9. Deling af oplysninger. Vi kan dele dine
          oplysninger med Steamere og andre samarbejdspartnere relevante for
          levering af Ydelsen, så de kan levere den Ydelse, du beder om.
          Platformen kan også integreres med funktioner til deling på sociale
          medier og andre relaterede værktøjer, der giver dig mulighed for at
          dele dine handlinger på Platformen med andre apps, websteder eller
          medier, eller omvendt. Din brug af sådanne funktioner aktiverer deling
          af oplysninger med venner og offentligheden, afhængigt af dine
          indstillinger til deling på sociale medier. To af disse
          databehandlere, Google Analytics v/Google LLC. Og Facebook Inc. er
          etableret i USA. De fornødne garantier for overførsel af oplysninger
          til USA er sikret gennem databehandlerens certificering under EU-U.S.
          Privacy Shield, jfr. EU Persondataforordningens art. 45. Kopi af
          Google LLC’s certificering kan findes her:
          https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI Kopi
          af Facebook Inc.’s certificering kan findes her:
          https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active
          10. Analyse og markedsføringstjenester der leveres af andre. Vi kan
          anvende dine oplysninger i forbindelse med analyse og
          markedsføringstjeneste, der leveres af samarbejdspartnere med henblik
          på at levere varer eller tjenesteydelser bredt relateret til Ydelsen.
          11. Du kan til enhver tid rette dine kontooplysninger ved at logge ind
          på Platformen. Vær opmærksom på, at i nogle tilfælde kan vi beholde
          visse oplysninger om dig, som det er påkrævet ved lov, eller til
          lovlige forretningsmæssige formål i den udstrækning, det er tilladt i
          henhold til lovgivningen. 12. Så længe du er kunde hos os opbevarer vi
          dine persondata. Vi gemmer dine persondata i 3 år efter, du sidst har
          købt en ydelse på Steamrex.com. Dette gør vi for at sikre at du får en
          god og relevant kundeoplevelse, når du vender tilbage for at købe nye
          ydelser. Vi gemmer også dine fakturaer i op til 6 år i henhold til
          bogføringsloven. Har du ikke købt ydelser i 3 år, vil alle dine data
          blive anonymiseret, og dine personhenførbare data vil blive slettet.
          Din kundeprofil vil ligeledes blive lukket. 13. Indsigt og sletning af
          oplysninger. Du har i henhold til lov om personoplysninger ret til at
          gøre indsigelse mod såvel indsamlingen som de videre behandling af
          nævnte oplysninger, og kan med visse lovbestemte undtagelser få besked
          af SteamRex, som er dataansvarlig, om, hvilke oplysninger, der
          indsamles om dig. Du har også ret til at tilbagekalde et samtykke. 14.
          SIKKERHEDEN FOR DIG. Vi har truffet tekniske og organisatoriske
          foranstaltninger mod, at dine oplysninger hændeligt eller ulovligt
          bliver slettet, offentliggjort, fortabt, forringet eller kommer til
          uvedkommendes kendskab, misbruges eller i øvrigt behandles i strid med
          lovgivningen. Det er kun vores medarbejdere, der har et sagligt behov
          for at få adgang til dine personoplysninger for at udføre deres
          arbejde, som har adgang til dem. Alle medarbejdere er desuden
          underlagt tavshedspligt. 15. Hvis vi foretager ændringer i
          persondatapolitikken, vil du blive orienteret om dette næste gang du
          besøger vores site. 16. VERSIONER. Dette er version 1 af SteamRex ApS
          persondatapolitik dateret den 30/11 2019. 17. Retsgrundlaget for
          behandlingen er EU Persondataforordningens art 6, stk. 1, litra f. 18.
          Klage over behandlingen af personoplysninger. Hvis du vil klage over
          behandlingen af dine personoplysninger, kan det ske til den
          dataansvarlige (DPO), Lasse Meldgaard, der kan kontaktes på
          lasse@steamrex.dk eller til Datatilsynet, Borgergade 28, 5., 1300
          København K, dt@datatilsynet.dk. Version 1.2.1 20. september 2019. Til
          top Cookies Steamex anvender cookies til følgende formål: – Teknisk
          funktionalitet, så vi kan huske dine præferencer og gøre din
          brugeroplevelse større ved besøg på sitet. – Trafikmåling, så vi ved,
          hvor mange besøgende vores site har Hvad er Cookies? En cookie er en
          lille tekstfil, der lagres på din computer el. tilsvarende for at
          kunne genkende den. Der er ingen personlige oplysninger gemt i vores
          cookies, og de kan ikke indeholde virus. Formål med cookies på vores
          website: – Teknisk funktionalitet, så vi kan huske dine indstillinger.
          – Trafikmåling, så vi ved hvor mange, der besøger vores site Sådan
          sletter eller blokerer du for cookies
          http://minecookies.org/cookiehandtering Brug af personoplysninger
          SteamRex indsamler udelukkende persondataoplysninger til brug i
          udarbejdelse og herefter forsendelse af materialet til kunden.
          Personoplysninger afgives aldrig til tredjepart, med mindre du selv
          udtrykkeligt giver tilsagn hertil, og vi indsamler aldrig
          personoplysninger, uden at du selv har givet os disse oplysninger ved
          registrering, køb eller deltagelse i en undersøgelse m.v. Her
          indsamles oplysninger om navn, adresse, postnummer, e-mail samt de
          nødvendige oplysninger til brug i udarbejdelse af bestillingerne. Dine
          bestillinger hos Prik & Streg udstilles ikke på hjemmesiden eller
          andre medier uden dit skriftligt samtykke. Personoplysninger bruges
          til at gennemføre det køb eller den service, som oplysningerne er
          indsamlet i forbindelse med. Kontakt vedr. personoplysninger Hvis du
          ønsker adgang til de oplysninger, som er registreret om dig hos
          SteamRex, skal du rette henvendelse til lasse@steamrex.com. Er der
          registreret forkerte data, eller har du andre indsigelser, kan du
          rette henvendelse samme sted. Du har mulighed for at få indsigt i,
          hvilke informationer der er registreret om dig, og du kan gøre
          indsigelse mod en registrering i henhold til reglerne i
          Persondataloven. Beskyttelse af personoplysninger Ifølge
          persondataloven skal dine personlige oplysninger opbevares sikkert og
          fortroligt. Vi gemmer dine personlige oplysninger på computere med
          begrænset adgang, som er placeret i kontrollerede faciliteter, og
          vores sikkerhedsforanstaltninger kontrolleres løbende for at afgøre,
          om vores brugeroplysninger håndteres forsvarligt, og under stadig
          hensyntagen til dine rettigheder som bruger. Vi kan dog ikke garantere
          100 procent sikkerhed ved dataoverførsler via internettet. Det
          betyder, at der kan være en risiko for, at andre uberettiget
          tiltvinger sig adgang til oplysninger, når data sendes og opbevares
          elektronisk. Du afgiver således dine personlige oplysninger på eget
          ansvar. Personoplysninger slettes eller anonymiseres løbende
          efterhånden som det formål, de blev indsamlet til, afsluttes. Den
          hurtige udvikling af internettet betyder, at ændringer i vores
          behandling af personoplysninger kan blive nødvendige. Vi forbeholder
          os derfor ret til at opdatere og ændre nærværende retningslinjer for
          behandling af personoplysninger. Gør vi det, retter vi selvfølgeligt
          datoen for “sidst opdateret” øverst på siden. I tilfælde af væsentlige
          ændringer giver vi dig besked i form af en synlig meddelelse på vores
          websites. I det omfang, der behandles personoplysninger om dig, har du
          ifølge persondataloven ret til at få oplyst, hvilke personoplysninger,
          der kan henføres til dig. Såfremt det viser sig, at de oplysninger
          eller data, der behandles om dig, er urigtige eller vildledende, har
          du ret til at kræve disse berigtiget, slettet eller blokeret. Du kan
          til enhver tid gøre indsigelse mod, at oplysninger om dig gøres til
          genstand for behandling. Du kan også til enhver tid tilbagekalde dit
          samtykke. Du har mulighed for at klage over behandlingen af
          oplysninger og data vedrørende dig. Klage indgives til Datatilsynet,
          jf. persondatalovens § 58, stk. 1. Til top SteamRex standard
          Konkurrencebetingelser Disse standardbetingelser er underlagt øvrige
          vilkår og betingelser, der henvises til på tidspunktet for deltagelse
          i konkurrencen. 1. Konkurrenceoplysninger udgør en del af disse vilkår
          og betingelser. 2. Konkurrencen er åben for alle undtagen ansatte (og
          deres familier) i SteamRex ApS. 3. Deltagere skal være 18 år eller
          derover. Det kan være nødvendigt at bevise identitet og alder. 4. Brug
          af et forkert navn eller adresse vil resultere i inhabilitet. 5.
          Indlæg, der er ufuldstændige, ulæselige eller ikke afsluttet betragtes
          som ugyldige. 6. Alle tilmeldinger skal ske direkte fra den person,
          der deltager i konkurrencen. 7. Intet ansvar kan accepteres for
          tilmeldinger, der er mistet, beskadiget, forsinket eller på grund af
          computerfejl. 8. Præmierne er som nævnt i konkurrencen, og kan ikke
          overføres til en anden person, og der vil ikke blive tilbudt kontanter
          eller andre alternativer. 9. SteamRex forbeholder sig retten til at
          ændre konkurrencevilkårene og afvise deltagere, der ikke deltager i
          konkurrenceånden. 10. Konkurrencer kan ændres eller trækkes tilbage
          når som helst. 11. I tilfælde af, at en præmie ikke er tilgængelig,
          forbeholder SteamRex sig retten til at tilbyde en alternativ til samme
          værdi eller større værdi. 12. Vinderen (e) accepterer (e) brugen af
          deres navn, fotografi og videregivelse af adresse og samarbejder
          omkring andre rimelige anmodninger fra SteamRex om eventuel reklame.
          13. Medmindre andet er angivet, vil vinderen / vinderne blive trukket
          tilfældigt blandt deltagere, der er har indsendt inden lukningsdatoen
          anført i reklamematerialet/konkurrencematerialet. 14. Der vil blive
          gjort en rimelig indsats for at kontakte vinderen / vinderne. Hvis
          vinderen / vinderne ikke kan kontaktes, eller ikke er i stand til at
          overholde disse vilkår og betingelser, vil ingen ny vinder blive
          trukket. 15. Beskæftigelsen af præmien foretages skriftligt til
          vinderen / vinderne. 16. Konkurrencen tilbydes af SteamRex ApS,
          Valhøjs alle 158, 2610 Rødovre. Til top Abonnementsbetingelser 1.
          Generelt 1.1 SteamRex ApS, CVR nr. 39 31 40 88, Valhøjs Alle 158, 2810
          Rødovre (”SteamRex”), tilbyder bilrengøring på abonnement ved
          ”SteamRex 365”. Ved tilmelding til ”SteamRex 365” accepteres udover
          vores almindelige betingelser for levering
          (https://steamrex.com/terms) nedenstående særlige vilkår og
          betingelser. 1.2 SteamRex 365 giver adgang til et antal årlige
          bilrengøringer via SteamRex.com eller SteamRex app. Antallet af
          rengøringer er defineret i det enkelte abonnement og bliver stillet
          til rådighed for kunden et ad gangen for den igangværende periode. Den
          første rengøring stilles til rådighed for kunden ved oprettelse. Det
          betyder at kunden har et restanse beløb, når rengøring bruges straks,
          men ikke er fuldt finansieret. Restanse beløbet er kun relevant i
          forbindelse med opsigelse, og ned/opjusteringer, se punkt 2 og 3. Den
          næste rengøring stilles til rådighed straks i en ny påbegyndt periode.
          1.3 Kunden tilmelder sin bil til SteamRex 356 via SteamRex app eller
          www.steamrex.com. Umiddelbart efter tilmelding modtages pr. e-mail en
          bekræftelse med den indgåede aftale. Den aktuelle aftale kan ligeledes
          altid findes på www.SteamRex.com og SteamRex App. 1.4 Ved tilmelding
          til SteamRex635 tegnes et bilrengøringsabonnement for rengøring af
          hele bilen med det ønskede antal årlige rengøringer, dog minimum 4
          årlige rengøringer. Der kan tilkøbes ekstra rengøringer enkeltvist og
          mod betaling. Uanset at tegning af abonnement er sket for en bestemt
          rengøring, giver SteamRex dog mulighed for at opgradere rengøringen og
          vælge tilvalg mod ekstrabetaling fra gang til gang. 2. Betaling,
          fakturering mm. 2.1 Med SteamRex 365 bliver Abonnenten automatisk, via
          det tilmeldte betalingskort, opkrævet for det valgte
          bilrengøringsabonnement, køb af rengøringer enkeltvis og/eller
          eventuelle tilvalg. 2.2 Der er adgang til at se kvitteringer på
          SteamRex app eller www.SteamRex.com. 2.3 Ved tilmelding til SteamRex
          365 med samtidig tegning af abonnement accepteres en automatisk
          månedlig betaling. Se dog pkt. 4. om fortrydelsesret. 2.3.1 SteamRex
          gavekort kan ikke benyttes som betaling af SteamRex 365 Abonnement 2.4
          Første abonnementsbetaling falder ved bestilling, herefter betales
          abonnement månedsvis. 2.5 Justeringer af abonnement i forhold til
          antallet af årlige rengøringer og derved den månedlige pris foretages
          på SteamRex App eller www.SteamRex.com. 2.5.1 Når et abonnement
          justeres op, korrigeres fremtidige betalinger til det nye månedlige
          abonnementsbeløb. Eventuelle opståede restanser på tidligere
          betalinger opkræves ved bekræftelse af bestilling. 2.5.2. Når et
          abonnement justeres ned, korrigeres fremtidige betalinger til det nye
          månedlige abonnementsbeløb. Eventuelle opståede restanser på tidligere
          betalinger opkræves ved bekræftelse af bestilling. 3. Opsigelse,
          ophævelse mv. 3.1 Kunden kan opsige sit abonnement mod betaling af en
          eventuel restanse på den seneste rengøring. Restansen kan ses i
          SteamRex App eller www.steamrex.com. Beløbet betales ved opsigelse og
          udgør maksimalt prisen for en enkelt rengøring. Se dog pkt. 4.1 om
          fortrydelsesret for forbrugere. 3.2. Eventuelle fuldt betalte
          rengøringer, som ikke er anvendt, vil forsat være til rådighed for
          kunden på SteamRex app eller www.steamrex.com efter opsigelse. 3.3.
          Opsigelse kan foretages på SteamRex app eller på www.steamrex.com,
          eller ved at sende en mail til info@steamrex.com. 3.4. SteamRex kan
          uden varsel ophæve eller spærre kundens medlemskab, hvis kunden giver
          anledning hertil, herunder ved manglende betaling, misbrug eller
          begrundet mistanke om uberettiget brug. 3.5. Eventuelle fuldt betalte
          rengøringer, som ikke er anvendt, vil forsat være til rådighed for
          kunden på SteamRex app eller www.steamrex.com efter opsigelse. 4.
          Særlige forhold vedr. forbrugere, herunder fortrydelsesret og
          klageadgang 4.1. Fortrydelsesret. 4.1.1. Forbrugere, som defineret i
          den til enhver tid gældende forbrugeraftalelov, der har tegnet
          abonnement på bilrengøring, har en fortrydelsesret på 14 dage fra
          modtagelse af skriftlig bekræftelse på den indgåelse aftale inkl.
          nærværende betingelser. 4.1.2. Hvis fortrydelsesretten skal gøres
          gældende, skal dette ske senest ved udløbet af 14 dages fristen.
          Meddelelse af fortrydelsesretten kan ske pr. e-mail på mailadressen:
          info@steamrex.com. 4.1.3. Der gøres udtrykkeligt opmærksomt på, at
          fortrydelsesretten bortfalder, hvis man som forbruger anvender
          abonnementet, også selvom dette sker inden for 14 dage fra modtagelse
          af bekræftelse på den indgåede aftale.
`;

const page3 = `Fortrydelsesret
Som forbruger har du altid 14 dages fortrydelsesret, når du reserverer parkering online.

Fortrydelsesfristen udløber 14 dage efter den dag, hvor aftalen blev indgået.

Udløber fristen på en helligdag, lørdag, grundlovsdag, juleaftensdag eller nytårsaftensdag forlænges fristen til den følgende hverdag.

1. Meddel os, at du ønsker at fortryde din reservation
For at udøve fortrydelsesretten skal du sende os en besked via vores kontaktformular eller et brev, hvor du skriver, at du fortryder din reservation. Du kan benytte standardfortrydelsesformularen længere nede, men det er ikke et krav.

Kontaktformular: https://cph.force.com/customerservice/s/contactsupport?language=en_US

Almindelig post: Københavns Lufthavne A/S, Box 74, Lufthavnsboulevarden 6, 2270 Kastrup.

Du har også mulighed for at fortryde din reservation på vores hjemmeside ved at tilgå annulleringssiden – enten via din ordrebekræftelse eller via https://www.cph.dk/parkering-transport under ”Min reservation”. Herefter sender CPH en kvittering for modtagelse af din annullation pr. e-mail.

Fortrydelsesfristen er overholdt, hvis du sender din meddelelse om, at du fortryder reservationen, inden fortrydelsesfristen er udløbet.

Du kan ikke fortryde din reservation ved at udeblive fra den.

2. Bekræftelse og refundering
Når du har fortrudt din reservation, refunderer CPH alle betalinger modtaget fra dig uden unødig forsinkelse, og senest 14 dage fra den dato, hvor vi modtog din meddelelse om, at du fortrød din reservation. Denne tilbagebetaling sker med samme betalingsmiddel, som du anvendte ved reservationen. Du pålægges ikke gebyr som følge af tilbagebetalingen.

Du kan læse mere om din fortrydelsesret i handelsbetingelserne, som du finder her i handelsbetingelserne.

VIGTIGT - Hvis du allerede har påbegyndt din parkering…
Vær opmærksom på, at din indkørsel i parkeringsanlægget anses for din accept af, at din parkering påbegyndes. Fortryder du herefter din reservation, reduceres din tilbagebetaling med en forholdsmæssig del af den samlede pris for parkering i den reserverede periode, baseret på det antal dage du har holdt parkeret, indtil CPH modtog meddelelse om din udøvelse af fortrydelsesretten. 

3. Standardfortrydelsesformular
(denne formular udfyldes og returneres kun, hvis fortrydelsesretten gøres gældende)

- Til Københavns Lufthavne A/S (CPH), Box 74, Lufthavnsboulevarden 6, 2770 Kastrup, parkering@cph.dk:

- Jeg/vi meddeler herved, at jeg/vi ønsker at gøre fortrydelsesretten gældende i forbindelse med min/vores købsaftale om parkering i Københavns Lufthavn ___________

- Bestilt den ___________/reserveret til den ___________

- Forbrugerens navn ___________

- Forbrugerens adresse ___________

- Forbrugerens underskrift ___________ (kun hvis formularens indhold meddeles på papir)

- Dato ___________  
`;
