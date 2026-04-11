export interface VCardData {
  name: string;
  title?: string;
  phone?: string;
  email?: string;
  website?: string;
  location?: string;
}

export function generateVCard(data: VCardData): string {
  const vCard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${data.name}`,
    data.title ? `TITLE:${data.title}` : "",
    data.phone ? `TEL;TYPE=CELL:${data.phone}` : "",
    data.email ? `EMAIL;TYPE=INTERNET:${data.email}` : "",
    data.website ? `URL:${data.website}` : "",
    data.location ? `ADR;TYPE=WORK:;;${data.location};;;;` : "",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  return vCard;
}

export function downloadVCard(data: VCardData) {
  const vCardString = generateVCard(data);
  const blob = new Blob([vCardString], { type: "text/vcard;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${data.name.replace(/\s+/g, "_")}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
