import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import getRealm from "../../infrastructure/realm";
import { ITask } from "../../business/model/interface/ITask";

const Index = () => {
  const write = async () => {
    const tasksArray = [
      { _id: 1, name: "carne", status: "pendente" },
      { _id: 2, name: "banana", status: "pendente" },
      { _id: 3, name: "coca", status: "pendente" },
      { _id: 4, name: "pipoca", status: "pendente" },
      { _id: 5, name: "limão" },
      { _id: 6, name: "arroz", status: "japones" },
      { _id: 7, name: "arroz",},
      { _id: 8, name: "feijao",},
      { _id: 9, name: "frango",},



    ];

    const realmInstance = await getRealm();

    try {
      realmInstance.write(() => {
        tasksArray.forEach((task) => {
          realmInstance.create("Task", task, "modified");
        });
      });
      console.log("Todas as listas foram adicionadas!");
    } catch (error) {
      console.error("Erro ao adicionar as tarefas:", error);
    }
  };

  const getTasks = async () => {
    const realmInstance = await getRealm();

    try {
      const data = realmInstance.objects<ITask>("Task");

      if (data.length > 0) {
        console.log("Tarefas no banco de dados:", data);
      } else {
        console.log("Nenhuma lista encontrada no banco de dados.");
      }
    } catch (error) {
      console.error("Erro ao recuperar as tarefas:", error);
    }
  };

  const clearDatabase = async () => {
    const realmInstance = await getRealm();

    try {
      realmInstance.write(() => {
        const allTasks = realmInstance.objects<ITask>("Task");
        realmInstance.delete(allTasks);
      });
      console.log("Banco de dados limpo!");
    } catch (error) {
      console.error("Erro ao limpar o banco de dados:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test</Text>
      <Button title="Adicionar Lista" onPress={write} />
      <Button title="Exibir Lista" onPress={getTasks} />
      <Button title="Limpar Dados" onPress={clearDatabase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 20,
  },
});

export default Index;
