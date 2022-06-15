import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    marginTop: 40,
    height: height * 0.14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9F84BD",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontFamily: "latoBold",
    fontSize: 26,
    color: "#ffffff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontFamily: "latoRegular",
    fontSize: 16,
    marginVertical: 15,
  },
  list: {
    flex: 1,
  },
  card: {
    margin: 20,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardName: {
    fontFamily: "latoBold",
    fontSize: 18,
    marginVertical: 15,
  },
  cardImage: {
    width: width * 0.4,
    height: height * 0.2,
  },
  cardSpecies: {
    fontFamily: "latoRegular",
    fontSize: 16,
    marginVertical: 10,
  },
});
