import Realm from "realm";
import TaskSchema from "../business/model/Task";

const getRealm = async () =>
  await Realm.open({
    path: "mawe-app",
    schema: [TaskSchema],
  });

export default getRealm;