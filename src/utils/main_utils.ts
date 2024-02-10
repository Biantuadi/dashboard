export default function convertirCaracteresSpeciaux(chaine: string): string {
    const chaineNormalisee = chaine.normalize("NFD");
    return chaineNormalisee.replace(/[\u0300-\u036f]/g, "");
}