export default function convertirCaracteresSpeciaux(chaine: string): string {
    const chaineNormalisee = chaine.normalize("NFD");
    return chaineNormalisee.replace(/[\u0300-\u036f]/g, "");
}

export const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

export const splitDate = (date: string) => {
    const [year, month, day] = date.split("-")
    return {
      year,
      month: months[parseInt(month) - 1],
      day,
    }
  }