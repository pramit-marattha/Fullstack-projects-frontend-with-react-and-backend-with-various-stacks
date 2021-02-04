![goalmgr](https://user-images.githubusercontent.com/37651620/106894418-0e7e5080-6717-11eb-9a4b-83bd70401dc9.png)

It's Live 🎉 Visit here ==> https://goal-manager-mern.netlify.app/


## Notes

- **M** = MongoDB (We'll use Mongoose to make it easier for Node.js to work with MongoDB, and we'll use MongoDB Atlas = MongoDB database, but cloud).
- **E** = Express (makes it easier to work with Node.js. We'll use `cors` middleware to access other servers outside our server).
- **R** = React (for the frontend. We'll use `bootstrap` for styling, `react-router-dom` for React routes, `react-datepicker` for React Datepicker component, and `axios` to connect to the backend).
- **N** = Node.js (for the server. We'll use `dotenv` to load environment variables from an .env file into `process.env`, and `nodemon` to make the app auto-restart when you edit/save files).

Goal Manager App:

To just get it running after you `git clone`, set up [MongoDB Atlas](https://github.com/hchiam/learning-mern-stack#mongodb-atlas), and then follow these CLI steps:

```bash
cd goal-manager
cd client
npm install
cd server
npm install
touch .env

# inside /client: (separate CLI tab)
cd ..
cd client
npm i
npm start

# inside server folder: (separate CLI tab)
cd server
nodemon server.js
# or: nodemon -x 'npm run lint; node server.js'
```

To develop it yourself from scratch, follow CLI steps below, and copy the code from this repo to fill in the files you create.

<details>
<summary><span style="font-size:x-large">MongoDB</span></summary>

### Terms

- Database = Database (in Tabular/Relational DBs)
- Collection = Table (in Tabular/Relational DBs)
- Document = Row (in Tabular/Relational DBs)
- Index = Index (in Tabular/Relational DBs)
- $lookup = Join (in Tabular/Relational DBs)
- Reference = Foreign Key (in Tabular/Relational DBs)

### MongoDB Documents

BSON (looks like JSON). "Documents" can be nested. Data can be placed "right next" to each other.

### MongoDB Atlas

Cluster = place to store data (in the cloud).

Hit the "Connect" button to see the security and connection steps.

Set up your `.env` file and paste in the URI that you get from following the instructions. It should look something like this:

```text
PORT=6969
ATLAS_URI= your cloud url
```

You need to remember to paste in the `<dbUser>` and `<password>`. Do **NOT** share it publicly, and do **NOT** include the `.env` file in commits.

### MongoDB ObjectId

ObjectId is guaranteed unique across collections: timestamp + random value + count.

</details>

<details>
<summary><span style="font-size:x-large">Project Setup</span></summary>

```bash
node -v
clone it or start from scratch
npx create-react-app .
```

</details>

<details>
<summary><span style="font-size:x-large">Server Setup</span></summary>

```bash
cd goal-manager
cd server
npm init
npm install express cors mongoose dotenv
npm install -g nodemon # you might have to do sudo
touch server.js # inside /backend
nodemon server.js
```

Leave `nodemon` running in that CLI tab. Open another CLI tab to run in parallel so you can create more files.
