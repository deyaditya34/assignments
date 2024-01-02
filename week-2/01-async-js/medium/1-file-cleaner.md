## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require("fs");

fs.readFile("package.json", (err, data) => {
  if (err) {
    console.log("The error is", err);
  } else {
    let parsedData = JSON.parse(data);
    const DATA_KEYS = Object.keys(parsedData);
    const DATA_VALUES = Object.values(parsedData);
    console.log("datakeys", DATA_KEYS);
    console.log("datavalues", DATA_VALUES)
    let result = {};
    DATA_KEYS.forEach((key, i)=> {
      console.log("dataValues[i]", DATA_VALUES[i])
      const processedValue = processValue(DATA_VALUES[i]);

      result[key] = processedValue;
    })
    let stringifyResult = JSON.stringify(result)
    fs.writeFile("output.txt", stringifyResult, (err) => {
      if (err) {
        console.log("File write error -", err)
      }
    })

  }
});

function processValue(value) {
  let result = ""
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== " ") {
      result += value[i]
    }
  }
  return result;
}