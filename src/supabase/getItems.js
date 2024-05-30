import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xvmdoogeotezpfwoptzl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2bWRvb2dlb3RlenBmd29wdHpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3NjUyOTgsImV4cCI6MjAzMTM0MTI5OH0.1T1vtWtUFsUbnKGASiNRHdHbim6Yv8oQ7Klr1SOAzqc"
);

export async function getItems(sortBy, filterBy, page = 1, pageSize = 6) {
  const from = (page - 1) * pageSize;
  const to = page * pageSize - 1;

  const call = supabase
    .from("hittegodslist")
    .select("*", { count: "exact" })
    .range(from, to);

  if (sortBy) {
    call.order(sortBy, { ascending: true });
  }

  if (filterBy) {
    call.filter("item_type", "eq", filterBy);
  }

  return await call;
}

export async function getReservation({ id, email }) {
  const call = supabase
    .from("reservationlist")
    .select("*")
    .filter("email", "eq", email.trim().toLowerCase())
    .filter("reservation_numb", "eq", id.trim().toUpperCase());

  return await call;
}
