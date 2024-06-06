import { useState } from "react";
import { getReservation } from "../supabase/getItems";
import Cleave from "cleave.js/react";
import Modal from "./Modal";

export default function MyReservation() {
  const [test, setTest] = useState(false);
  const [email, setEmail] = useState("");
  const [reservationNumber, setReservationNumber] = useState("");
  const [status, setStatus] = useState(null);

  const handleShowReservation = async () => {
    if (status === "Loading...") return;

    if (email === "" || reservationNumber === "") {
      setStatus("Udfyld venligst alle felter.");
      return;
    }

    setStatus("Søger efter reservation...");

    const reservation = await getReservation({ id: reservationNumber, email });

    if (reservation.data.length === 0) {
      setStatus("Ingen reservation fundet.");
      return;
    }

    setStatus(
      "Vi har fundet din reservation, og har sendt en email med detaljerne.",
    );
  };

  // test@gmail.com 0000-0000-0000
  return (
    <div className="w-full mb-16">
      <Modal
        isOpen={test}
        close={() => setTest(false)}
        title="Glemt Reservationsnummer?"
      >
        <div className="w-full flex flex-col">
          <h2 className="self-start text-cph-blue mb-5">
            Har du glemt dit reservationsnummer, og har brug for at få det
            tilsendt?
          </h2>
          <input
            type="email"
            aria-label="email address"
            content={email}
            className="block w-full p-3 border border-grey-lighter rounded-md h-14"
            placeholder="Din e-mailadresse"
          />
          <p className="text-small mb-5">
            Den e-mail du brugte, da du foretog din reservation
          </p>
          <button
            className="justify-self-center px-20 py-3 text-sm font-semibold text-cph-white bg-cph-blue rounded-md"
            onClick={() => setTest(false)}
          >
            Tilsend
          </button>
        </div>
      </Modal>
      <h2 className="mb-5 text-4 font-bold text-center text-cph-blue">
        Min Reservation
      </h2>

      <div className="flex gap-4 justify-center px-10 flex-col md:flex-row">
        <div className="mb-6 w-full">
          <input
            type="email"
            id="email"
            aria-label="email address"
            content={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-3 border border-grey-lighter rounded-md h-14"
            placeholder="Din e-mailadresse"
          />
          <p className="text-small">
            Den e-mail du brugte, da du foretog din reservation
          </p>
        </div>

        <div className="mb-6 w-full">
          <Cleave
            type="text"
            id="reservationNumber"
            aria-label="reservation number"
            content={reservationNumber}
            onChange={(e) => setReservationNumber(e.target.value)}
            className="block w-full p-3 border border-grey-lighter rounded-md h-14"
            placeholder="Dit reservationsnummer"
            options={{
              delimiter: "-",
              blocks: [4, 4, 4],
              uppercase: true,
            }}
          />
          <p className="text-small">
            Du finder reservationsnummer i din ordrebekræftelse
          </p>
        </div>
      </div>

      <div className="flex justify-center px-10 flex-col">
        <button
          type="button"
          className="self-center w-fit px-20 py-3 text-sm font-semibold text-cph-white bg-cph-blue rounded-md"
          onClick={handleShowReservation}
        >
          Vis min reservation
        </button>

        <button
          className="self-center hover:underline"
          onClick={() => setTest(true)}
        >
          Glemt dit reservationsnummer?
        </button>
      </div>

      {status && (
        <p className="text-center text-large font-medium mt-4">{status}</p>
      )}
    </div>
  );
}
