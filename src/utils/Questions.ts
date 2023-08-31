import * as p from "@clack/prompts";

const Questions = async () => {
  return await p.group(
    {
      ProjectType: () =>
        p.select({
          message: `What is your project type`,
          options: [
            //  @ts-ignore
            { value: "vanilla", label: "Vanilla" },
            //  @ts-ignore
            { value: "react", label: "React.js - vite" },
            //  @ts-ignore
            { value: "vue", label: "Vue.js - vite" },
            //  @ts-ignore
            { value: "angular", label: "Angular.js " },
            //  @ts-ignore
            { value: "svelte", label: "Svelte.js" },
          ],
        }),
      //  adding component LIbrary
      componentLIbrary: () =>
        p.multiselect({
          message: `which components library do you want? ?`,
          options: [
            { value: "flowbit", label: "Flowbit" },
            { value: "daisyUI", label: "Daisy UI " },
            { value: "materialTailwind", label: "material Tailwind" },
          ],
          required: false,
        }),
      //  get css root file path
      cssFilePath: ({ results }) =>
        p.text({
          message: `Provide your root  CSS file path `,
          initialValue:
            results.ProjectType === ("react" || "vue" || "svelte" || "angular")
              ? "./src/index.css"
              : "./",
        }),
    },
    {
      onCancel: () => {
        p.cancel(`Operation cancelled `);
        process.exit(0);
      },
    }
  );
};

export default Questions;
