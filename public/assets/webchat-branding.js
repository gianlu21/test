
var brandColor1 = "#06c";
var brandColor2 = "#06c";
var brandTextColor = "#ffffff";

var personalizedColors = {
   darkBlueBackground: "#06c",
   whiteText: "#FFFFFF",
   entryPointBackground: "#06c",
   lighterBackground: "#ecedf1",
   primaryButtonBackground: "#06c",
   primaryButtonColor: "#FFFFFF",
   secondaryButtonBackground: "06c",
   secondaryButtonColor: "#FFFFFF"
};

var brandMessageBubbleColors = function (bgColor) {
    return {
        Bubble: {
            background: bgColor,
            color: brandTextColor
        },
        Avatar: {
            background: bgColor,
            color: brandTextColor
        },
        Header: {
            color: brandTextColor
        }
    }
};

var brandedColors = {
    Chat: {
        MessageListItem: {
            FromOthers: brandMessageBubbleColors(brandColor2),
            FromMe: brandMessageBubbleColors(brandColor1),
        },
        MessageInput: {
            Button: {
                background: brandColor1,
                color: brandTextColor
            }
        },
        MessageCanvasTray: {
            Container: {
                background: personalizedColors.darkBlueBackground,
                color: personalizedColors.whiteText
            }
        },
    },

    MainHeader: {
        Container: {
            background: personalizedColors.darkBlueBackground,
            color: personalizedColors.whiteText
        },
        Logo: {
            fill: brandTextColor
        }
    },

    EntryPoint: {
        Container: {
            background: personalizedColors.entryPointBackground,
            color: personalizedColors.whiteText
        }
    },

    PreEngagementCanvas: {
        Container: {
            background: personalizedColors.lighterBackground
        },

        Form: {
            SubmitButton: {
                background: personalizedColors.primaryButtonBackground,
                color: personalizedColors.whiteText
            }
        }
    }
};
