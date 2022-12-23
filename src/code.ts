type Command = "TEXT"

const TEXT = "Text";

const COMMANDS = {
  TEXT
};
const DEFAULT_FONT_CONFIG = { family: "Inter", style: "Regular" }

/**
 * Perform action after all parameters have been added
 * - DOCS: https://www.figma.com/plugin-docs/plugin-parameters/#run
 */
figma.on("run", async ({ command, parameters }: RunEvent) => {
  const ctxCommand = command as Command;

  if (parameters) {
    switch (ctxCommand) {
      case COMMANDS.TEXT:
        await figma.loadFontAsync(DEFAULT_FONT_CONFIG);
        const text = figma.createText()
        text.fontName = DEFAULT_FONT_CONFIG
        text.characters = parameters.text
        text.fontSize = 20

        break;

      default:
        break;
    }
  }

  figma.closePlugin();
});

export {};
