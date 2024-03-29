const ftp = require("basic-ftp")

deployToFtp()

async function deployToFtp() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  const pwd = process.argv[2];
  console.log('Received password as param: ', pwd);
  try {
    await client.access({
      host: "ftp.skarebyggtjanst.se",
      user: "skarebyggtjanst.se",
      password: pwd,
      secure: false
    });
    console.log(await client.list());

    await client.clearWorkingDir()
    await client.uploadFrom(".htaccess", ".htaccess");
    await client.uploadFromDir("dist/skarebyggtjanst")
  }
  catch(err) {
    console.log(err);
  }
  client.close();
}


