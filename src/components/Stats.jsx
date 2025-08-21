const MAX_STAT = 255;

export default function Stats({ stats = [] }) {
  if (!Array.isArray(stats) || stats.length === 0) return null;

  let statTotal = 0;

  stats.map((item, index) => {
    Object.entries(item).map(([key, value]) => {
      if (key === "base_stat") {
        statTotal += value;
      }
    });
  });
}
