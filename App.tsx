import React from 'react';
import {
  Button, View
} from 'react-native';
import WebView from 'react-native-webview';



export class App extends React.Component<any, any> {
  constructor(props:any){
    super(props);
    this.state={
      url: "https://www.google.com"
    };
  }
  render(){
    let WebViewRef:any;
    let { url } = this.state;
    return (
      <View style={{backgroundColor: "blue", width: "100%", height: "100%"}}>
        <View style={{height: "20%", width: "100%"}}/>
        <View style={{backgroundColor: "white"}}>
          <Button title={"Load DR"}  onPress={()=>{
              if(WebViewRef){
                
                this.setState({
                  url: "https://nora-body.diagnosticrobotics.com/pq-web/symptoms?visit_id=eQlwUg=="
                });
                WebViewRef.reload()
                
              };
              console.log(url, WebViewRef)
              }}/>
        </View>
        <View style={{height: "50%", width: "100%"}}>
          <WebView
            ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
            source={{ uri: url }}/>
        </View>
      </View>
    );
  };
};

export default App;
