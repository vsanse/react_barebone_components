export default (ind) => snippets[ind]

const snippets = [
    `<Button>Default Button</Button>

    <Button danger>Default Danger Button</Button>

    <Button type="link">Link Button</Button>
    <Button type="link" danger>
      Danger Link Button
    </Button>

    <Button type="primary">Primary Button</Button>

    <Button type="primary" danger>
      Danger Primary Button
    </Button>

    <Button type="hollow" shape="round">
      Primary Button
    </Button>

    <Button type="hollow" danger shape="round">
      Danger Primary Button
    </Button>

    <RippleButton type="primary" shape="round">
      Ripple Button
    </RippleButton>

    <RippleButton type="primary" danger shape="round">
      Ripple Button
    </RippleButton>`,
    // 
    `<Button type="primary" onClick={() => setShowModal(true)} shape="round">
      Open Modal
     </Button>

    <Button
      type="primary"
      onClick={() => setShowModalLoading(true)}
      shape="round"
    >
      Open Modal With Loading
    </Button>

    <Modal
      visible={showModal}
      onClose={() => setShowModal(false)}
      width={300}
    >
      Hello World!
    </Modal>

    <Modal
      visible={showModalLoading}
      onClose={() => setShowModalLoading(false)}
      width={300}
    >
      <LoadingCircle />
    </Modal>`,
    //
    ` 
      <Dropdown options={DATA} defaultOption={0} />

      <AutoSuggest options={DATA} defaultOption={0} autoFocus={false} />
    `,
    //
`
    <Spinner loading={showSpinner}>
      <div>
        <Button
          onClick={() => {
            setShowSpinner(true);
          }}
        >
          Show Spinner
        </Button>
      </div>
    </Spinner>

    <Spinner loading={showSpinner} CustomSpinner={LoadingCircle}>
      <div className="App__dummyCard">
        <Button
          onClick={() => {
            setShowSpinner(true);
          }}
        >
          Show Spinner
        </Button>
      </div>
    </Spinner>`,
    //
`
    <Switch
      onChange={(isChecked) => console.log(isChecked)}
      defaultValue={true}
      icon={"😊"}
    />

    <Checkbox
      id="sample"
      onChange={(isChecked) => console.log("checkbox", isChecked)}
    >
      Sample Checkbox
    </Checkbox>

    <Radio
      name="radio_group"
      id="sample_radio"
      onChange={(isChecked) => console.log("radio", isChecked)}
    >
      Sample Radio&nbsp;
    </Radio>

    <Radio
      name="radio_group"
      id="sample_radio2"
      onChange={(isChecked) => console.log("radio", isChecked)}
    >
      Sample Radio 2
    </Radio>

      <RangeSlider
        customClass="flex1"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
      />

    <InputField
      placeholder="Placeholder"
      value={inputFieldValue.normal}
      onChange={(e) =>
        setInputFieldValue({ ...inputFieldValue, normal: e.target.value })
      }
    />

    <InputField
      placeholder="With error"
      value={inputFieldValue.withError}
      onChange={(e) =>
        setInputFieldValue({
          ...inputFieldValue,
          withError: e.target.value
        })
      }
      error={true}
    />

    <NumberField
      placeholder="Number Placeholder"
      setInputFieldValue={setInputFieldValue}
      inputFieldValue={inputFieldValue}
    />
  `,
  //
`
  <Button type="primary" onClick={() => setTopLeft(true)} shape="round">
    Top left
  </Button>

  <Button type="primary" onClick={() => setTopCenter(true)} shape="round">
    Top Center
  </Button>

  <Button type="primary" onClick={() => setTopRight(true)} shape="round">
    Top Right
  </Button>

  <Button
    type="primary"
    onClick={() => setBottomLeft(true)}
    shape="round"
  >
    Bottom left
  </Button>

  <Button
    type="primary"
    onClick={() => setBottomCenter(true)}
    shape="round"
  >
    Bottom Center
  </Button>

  <Button
    type="primary"
    onClick={() => setBottomRight(true)}
    shape="round"
  >
    Bottom Right
  </Button>

  <Toast
    position="topLeft"
    visible={topLeft}
    onClose={() => setTopLeft(false)}
    text="This is Top Left Toast"
  />

  <Toast
    position="topCenter"
    visible={topCenter}
    onClose={() => setTopCenter(false)}
    text="This is Top Center Toast"
  />

  <Toast
    position="topRight"
    visible={topRight}
    onClose={() => setTopRight(false)}
    text="This is Top Right Toast"
  />

  <Toast
    position="bottomLeft"
    visible={bottomLeft}
    onClose={() => setBottomLeft(false)}
    text="This is Bottom Left Toast"
  />

  <Toast
    visible={bottomCenter}
    onClose={() => setBottomCenter(false)}
    text="This is Bottom Center Toast"
  />

  <Toast
    position="bottomRight"
    visible={bottomRight}
    onClose={() => setBottomRight(false)}
    text="This is Bottom Right Toast"
  />`,
  //
`
    <Skeleton width="100%" height="20px" borderRadius="20px" />

    <Skeleton width="40px" height="40px" borderRadius="50%" />

    <Switch
      onChange={(isChecked) => setIsLoading(isChecked)}
      defaultValue={true}
      id="skeleton_loading"
      label={isLoading ? "Loading" : "Not Loading"}
    />

    <Skeleton loading={isLoading}>
      <h3>This is dummy text for skeleton</h3>
    </Skeleton>
`,
`
    <Paper>
        <div className="cover_full">
          <h4>These containers take props such as elevation.</h4>
          <p>Example: {"<Paper elevation={8} />"}</p>
        </div>
    </Paper>

    <Paper>
      <Paper elevation={2} >
          <div className="cover_full">
              <b>With Elevation 2</b>
          </div>
      </Paper>
      <Paper elevation={6} >
          <div className="cover_full">
              <b>With Elevation 6</b>
          </div>
      </Paper>
    </Paper>

    <Paper mode="dark">
        <div className="cover_full">
          <h4>Also you can pass a prop mode as dark to change theme.</h4>
          <p>Example: {"<Paper mode='dark' />"}</p>
        </div>
    </Paper>

    <Paper>
      <Paper mode="dark" elevation={2} >
          <div className="cover_full">
              <b>With Elevation 2</b>
          </div>
      </Paper>
      <Paper mode="dark" elevation={6} >
          <div className="cover_full">
              <b>With Elevation 6</b>
          </div>
      </Paper>
    </Paper>
`

]