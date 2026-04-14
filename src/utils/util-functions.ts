export const formatDate = (date: string | Date | null | undefined) => {
    if (date !== null && date !== undefined && date !== '') {
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) { month = '0' + month; }
      if (day.length < 2) { day = '0' + day; }

      return [year, month, day].join('-');
    } else {
      return '';
    }
  };

   export const setDate = (date: Date, offset: number) => {
    const d = new Date(date);
    d.setDate(d.getDate() + offset);
    return d;
  };