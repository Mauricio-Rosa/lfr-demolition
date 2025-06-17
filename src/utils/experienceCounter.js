/**
 * Calcula o tempo de experiência desde a data inicial até hoje,
 * retornando uma string no formato "X anos, Y meses e Z dias".
 * @param {string} startDate - Data inicial no formato "DD/MM/YYYY"
 * @returns {string}
 */
export function getExperienceTime(startDate = "01/11/2010") {
  const [day, month, year] = startDate.split("/").map(Number);
  const start = new Date(year, month - 1, day);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  let days = today.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    // Ajusta os dias pegando o último dia do mês anterior
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Monta string amigável
  const yearsStr = years > 0 ? `${years} ano${years > 1 ? "s" : ""}` : "";
  const monthsStr = months > 0 ? `${months} mês${months > 1 ? "es" : ""}` : "";

  // Junta só os que não são vazios
  const parts = [yearsStr, monthsStr].filter(Boolean);

  return parts.join(", ");
}
