module.exports = {
  getUnixAndUtcFromCurrentDate(req, res) {
    const now = new Date();

    return res.json({
      unix: now.getTime(),
      utc: now.toUTCString(),
    });
  },
  getUnixAndUtcFromGivenDate(req, res) {
    const { date } = req.params;
    const newDate = new Date(Number(date));

    try {
      if (isNaN(newDate)) {
        const newStringDate = new Date(date);

        if (isNaN(newStringDate.getTime())) {
          throw new Error();
        }

        return res.json({
          unix: newStringDate.getTime(),
          utc: newStringDate.toUTCString(),
        });
      }

      return res.json({
        unix: newDate.getTime(),
        utc: newDate.toUTCString(),
      });
    } catch (err) {
      return res.status(400).json({
        error: "Invalid Date"
      });
    }
  },
};
