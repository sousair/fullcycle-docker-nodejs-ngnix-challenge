function formatToTable(fields, data) {
  return `
    <table>
      <tr>
        ${fields.map(fieldName => {
          return `<th>${fieldName}</th>`
        }).join('')}
      </tr>
      ${data.map(element => {
        const values = Object.values(element);
        return `
          <tr>
            ${values.map(value => {
              return `
                <td>${value}</td>
              `
            }).join('')}
          </tr>
        `
      }).join('')}
    </table>
  `
}

module.exports = {
  formatToTable,
}