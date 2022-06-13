var admin = require("firebase-admin");

var serviceAccount = require("../coderhouse-d53f1-firebase-adminsdk-7pvvx-03be2e44ca.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const query = db.collection("usuarios");

console.log("🔥 Connected!");

async function create() {
  try {
    let doc = query.doc("1");
    await doc.create({ nombre: "Coderhouse1", dni: 111111 });
    doc = query.doc("2");
    await doc.create({ nombre: "Coderhouse2", dni: 222222 });
  } catch (error) {
    console.log(error);
  }
}

// create();

async function readAll() {
  try {
    let response = await query.get();
    response = response.docs.map((doc) => {
      return {
        id: doc.id,
        nombre: doc.data().nombre,
        dni: doc.data().dni,
      };
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// readAll();

async function readOne() {
  try {
    const doc = query.doc("2");
    const item = await doc.get();
    const response = item.data();
    response.id = doc.id;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
// readOne();

async function update() {
  try {
    const doc = query.doc("2");
    const item = await doc.update({ dni: 2222222 });
    const response = item.data();
    response.id = doc.id;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// update();

async function deleteUser() {
  try {
    const doc = query.doc("2");
    const item = await doc.delete();
    console.log(item);
  } catch (error) {
    console.log(error);
  }
}

deleteUser();
