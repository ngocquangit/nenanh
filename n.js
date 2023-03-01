const testFolder = process.argv[2] ? process.argv[2] : "";
const testFolderRes = testFolder + "/min";

const FormData = require("form-data");
const fs = require("fs");
const axios = require("axios");
let check = true;
if (testFolder != "") {
  if (!fs.existsSync(testFolderRes)) {
    try {
      fs.mkdirSync(testFolderRes, 0777);
    } catch (error) {
      console.log("Đường dẫn sai để \\ thành  / trong url ");
      check = false;
    }
  }
  if (check) {
    const dirents = fs.readdirSync(testFolder, { withFileTypes: true });
    const filesNames = dirents
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name);
    for (const item in filesNames) {
      getUrl(testFolder + "/" + filesNames[item], filesNames[item]);
    }
  }
}

async function getUrl(url, file) {
  // Read image from disk as a Buffer
  const image = await fs.createReadStream(url);

  // Create a form and append image with additional fields
  const form = new FormData();
  form.append("files", image, file);

  // Send form data with axios
  const response = await axios.post("http://api.resmush.it/ws.php", form, {
    headers: {},
  });
  let data = response.data.dest;
  axios
    .get(data, { responseType: "stream" })
    .then((response) => {
      response.data.pipe(fs.createWriteStream(testFolderRes + "/" + file));
    })
    .catch((error) => {
      console.log("Lỗi");
    });
  console.log(data);
}
