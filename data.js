const fs = require("fs");
const csv = require("csv-parser");

const results = [];
const countiesData = [];

fs.createReadStream("C:UsersDMDesktopdata.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    results.forEach((row) => {
      let county = countiesData.find((c) => c.county_code == row.county_code);
      if (!county) {
        county = {
          county_code: row.county_code,
          county_name: row.county_name,
          sub_counties: [],
        };
        countiesData.push(county);
      }

      let subcounty = county.sub_counties.find(
        (sc) => sc.subcounty_name === row.subcounty_name
      );
      if (!subcounty) {
        subcounty = {
          subcounty_name: row.subcounty_name,
          wards: [],
        };
        county.sub_counties.push(subcounty);
      }

      let ward = subcounty.wards.find((w) => w.ward_name === row.ward_name);
      if (!ward) {
        ward = {
          ward_name: row.ward_name,
          stages: [],
        };
        subcounty.wards.push(ward);
      }

      if (!ward.stages.includes(row.stage_name)) {
        ward.stages.push(row.stage_name);
      }
    });

    console.log(JSON.stringify(countiesData, null, 2));
  });
