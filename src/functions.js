const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./kuran_meal.db", (err) => {
  if (err) {
    console.error("Database error:", err.message);
  }
});

function queryAll(table, filter = {}) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM ${table}`, [], (err, rows) => {
      if (err) {
        return reject(err);
      }
      const filteredRows = rows.filter(item =>
        Object.keys(filter).every(key => item[key] == filter[key])
      );
      resolve(filteredRows);
    });
  });
}

async function sure(filter = {}) {
  try {
    return await queryAll("sure", filter);
  } catch (err) {
    console.error("Error fetching sure data:", err.message);
  }
}

function normalizeText(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

async function ayet(filter = {}) {
  try {
    return await queryAll("ayet", filter);
  } catch (err) {
    console.error("Error fetching ayet data:", err.message);
  }
}

async function textToAyet(text) {
  try {
    const rows = await queryAll("ayet");
    const normalizedText = normalizeText(text.toLowerCase());
    return rows.filter(row =>
        normalizeText(row.ayet_metin.toLowerCase()).includes(normalizedText)
    );
  } catch (err) {
    console.error("Error fetching ayet data:", err.message);
  }
}
module.exports = {
  sure,
  ayet,
  textToAyet,
};