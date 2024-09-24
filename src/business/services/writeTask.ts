import getRealm from "../../infrastructure/realm";
import { ITask, ITaskObject } from "../model/interface/ITask";

let createdTask: ITaskObject;
const writeTask = async (data: ITask) => {
  const realm = await getRealm();

  realm.write(() => {
    createdTask = realm.create("Task", data, "modified") as unknown as ITaskObject;
  });

  return createdTask;
};

export default writeTask;
