export default function convertirCaracteresSpeciaux(chaine: string): string {
    var chaineNormalisee = chaine.normalize("NFD");
    return chaineNormalisee.replace(/[\u0300-\u036f]/g, "");
}