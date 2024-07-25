import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  MemeGeneratorForm,
  CustomInput,
  CustomLabel,
  FormGenerator,
  CustomSelect,
  CustomOption,
  GenerateButton,
  MemeContainer,
  TextContent,
} from './styledComponents'
const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backGroundImgUrl: '',
    inputTopText: '',
    inputBottomText: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    bgUrl: '',
    topText: '',
    bottomText: '',
    activeFont: '',
  }

  onChangeBgImageUrl = event => {
    this.setState({backGroundImgUrl: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({inputTopText: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({inputBottomText: event.target.value})
  }

  onChangeSelectInput = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onSubmitMemeForm = event => {
    event.preventDefault()
    const {
      backGroundImgUrl,
      inputBottomText,
      inputTopText,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      bgUrl: backGroundImgUrl,
      topText: inputTopText,
      bottomText: inputBottomText,
      activeFont: activeFontSizeOptionId,
    })
  }

  renderMeme = () => {
    const {backGroundImgUrl, topText, bottomText, activeFont} = this.state
    return (
      <MemeContainer data-testid="meme" backgroundImage={backGroundImgUrl}>
        <TextContent activeFontSizeId={activeFont}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFont}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  renderMemeGenerator = () => {
    const {
      backGroundImgUrl,
      inputBottomText,
      inputTopText,
      activeFontSizeOptionId,
    } = this.state
    return (
      <MemeGeneratorForm onSubmit={this.onSubmitMemeForm}>
        <CustomLabel htmlFor="backgroundImageUrl"> IMAGE URL</CustomLabel>
        <CustomInput
          id="backgroundImageUrl"
          placeholder="Enter the Image URL"
          type="text"
          value={backGroundImgUrl}
          onChange={this.onChangeBgImageUrl}
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          id="topText"
          placeholder="Enter the Top Text"
          type="text"
          value={inputTopText}
          onChange={this.onChangeTopTextInput}
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          id="bottomText"
          placeholder="Enter the Bottom Text"
          type="text"
          value={inputBottomText}
          onChange={this.onChangeBottomTextInput}
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeSelectInput}
        >
          {fontSizesOptionsList.map(eachSize => (
            <CustomOption key={eachSize.id} value={eachSize.optionId} >
              {eachSize.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormGenerator>
            {this.renderMemeGenerator()}
            {this.renderMeme()}
          </FormGenerator>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
