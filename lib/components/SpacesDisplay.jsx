import { appIcons } from "../data.js";

export const refreshFrequency = false;

const replace_app_name = {
  "Google Chrome": "Chrome",
  "Microsoft Outlook": "Outlook",
  "iTerm2": "iTerm",
};

const SpacesDisplay = ({ output, displayId }) => {
  const { windows } = output;

  if (!output) return <div className="spaces-display spaces-display--empty" />;

  return (
    <div className="spaces-display">
      {windows
        .sort((a, b) =>
          a.space > b.space
            ? 1
            : a.space === b.space
            ? a.id > b.id
              ? 1
              : -1
            : -1
        )
        .map((window, i) => {
          const classes = window.focused ? "space space--focused" : "space";
          const name = replace_app_name[window.app] || window.app;
          return (
            <span key={i} className={classes}>
              <span className="app">{name}</span>
            </span>
          );
        })}
    </div>
  );
};

export default SpacesDisplay;
