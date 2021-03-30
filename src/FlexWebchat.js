import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import axios from 'axios';
import Cookies from 'universal-cookie';



class FlexWebchat extends React.Component {




  appconfig;

  state = {};

  constructor(props) {
    super(props);
    const cookies = new Cookies();

    this.state = {
      token: cookies.get('api_token')
    };

    if (this.state.token) {
      const headers = { Authorization: 'Bearer ' + this.state.token, };

      axios.get('https://dev2smartanpr.servizilocalispa.it/authenticationManager/api/account/getprofile?client_id=smart_crm', { headers })
        .then(response => {
          this.setState({ fiscalCode: response.data.FiscalCode })
          this.appConfig = {
            //  change the your AccountSid
            accountSid: 'AC44aff2300e771dce4c97bae6d4c65423',
            // change to your Flex Flow SID
            flexFlowSid: 'FO2f31e61144ae4655eb401adbae656197',
            context: {
              friendlyName: response.data.LastName

            },
            componentProps: {
              memberDisplayOptions: {
                yourDefaultName: 'You',
                theirDefaultName: 'Agent',
                yourFriendlyNameOverride: false,
                theirFriendlyNameOverride: false
              },
              MessageListItem: {
                useFriendlyName: true,
                authorName: "Lopssss"
              },
            },
            chatFriendlyName: "io",
            yourDefaultName: 'Io',
            theirDefaultName: 'Operatore',
            yourFriendlyNameOverride: true,
            theirFriendlyNameOverride: true,

            startEngagementOnInit: false,
            preEngagementConfig: {
              description: 'Ecco qualche informazione utile',
              fields: [
                {
                  label: 'Codice Fiscale',
                  type: 'InputItem',
                  attributes: {
                    name: 'fiscalCode',
                    type: 'text',
                    value: this.state.fiscalCode,
                    readOnly: true
                  }
                }
              ],
              submitLabel: 'Avvia chat',
            }




          };
          FlexWebChat.Manager.create(this.appConfig)
            .then(manager => {
              manager.strings.WelcomeMessage = "Invia un messaggio ai nostri operatori!";
              this.setState({ manager });
            })
            .catch(error => this.setState({ error }));
          FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = false;
          FlexWebChat.MessageListItem.defaultProps.useFriendlyName = true;
          FlexWebChat.MessageListItem.defaultProps.authorName = "Lopsus";

        });
    } else {
      this.appConfig = {
        //  change the your AccountSid
        accountSid: 'AC3eaa7846cb099fec22e0820f29aac01a',
        // change to your Flex Flow SID
        flexFlowSid: 'FO657cb0c6499541add39e4ab699d51411',
        context: {
          friendlyName: "Anonimo"
        },
        componentProps: {
          memberDisplayOptions: {
            yourDefaultName: 'You',
            theirDefaultName: 'Agent',
            yourFriendlyNameOverride: false,
            theirFriendlyNameOverride: false
          },
          MessageListItem: {
            useFriendlyName: true,
            authorName: "Lopssss"
          },
        },
        chatFriendlyName: "io",
        yourDefaultName: 'Io',
        theirDefaultName: 'Operatore',
        yourFriendlyNameOverride: true,
        theirFriendlyNameOverride: true,
        // colorTheme: {
        //   // eslint-disable-next-line no-undef
        //   overrides: brandedColors
        // },
        startEngagementOnInit: false,
        preEngagementConfig: {
          description: 'Ecco qualche informazione utile',
          fields: [
            {
              label: 'Codice Fiscale',
              type: 'InputItem',
              attributes: {
                name: 'fiscalCode',
                type: 'text'
              }
            },
            {
              label: 'Token di questa sessione',
              type: 'InputItem',
              attributes: {
                name: 'token',
                type: 'text'

              }
            }
          ],
          submitLabel: 'Avvia chat',
        }
      };

      FlexWebChat.Manager.create(this.appConfig)
        .then(manager => {
          manager.strings.WelcomeMessage = "Invia un messaggio ai nostri operatori!";
          this.setState({ manager });
        })
        .catch(error => this.setState({ error }));
      FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = false;
      FlexWebChat.MessageListItem.defaultProps.useFriendlyName = true;
      FlexWebChat.MessageListItem.defaultProps.authorName = "Lopsus";
    }
  }
  funzione() {
    const { manager } = this.state;
    return (
      <FlexWebChat.ContextProvider manager={manager}>
        <FlexWebChat.RootContainer />
      </FlexWebChat.ContextProvider>
    )
  }

  render() {
    console.log(this.props)
    const { manager, error } = this.state;
    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }

}

export default FlexWebchat;