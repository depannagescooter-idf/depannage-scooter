import { redirect } from "next/navigation";
import { carBatteryPage } from "@/data/car-battery";

/** Ancienne URL — redirection permanente vers le silo voiture. */
export default function LegacyCarBatteryRedirect() {
  redirect(carBatteryPage.path);
}
