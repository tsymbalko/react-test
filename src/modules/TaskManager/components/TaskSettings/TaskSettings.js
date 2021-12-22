import PropTypes from 'prop-types'

import { Button, Checkbox, List, Modal, Paragraph } from 'components/elements'

const TaskSettings = ({ isVisible, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      title="Lorem ipsum dolor sit amet"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={onClose}>
            accept
          </Button>
        </>
      }
    >
      <Paragraph mb="1.6rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
        cursus nibh, sit amet varius purus lacinia at. Quisque tincidunt
        efficitur tempor. Proin pellentesque dictum mauris sed lobortis. Etiam
        nec mollis elit. Fusce et lacus tincidunt sem commodo condimentum et id
        lectus.
      </Paragraph>
      <Paragraph mb="1.6rem">
        Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
        dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis ante
        rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula tempus
        neque, ac ornare libero tempor placerat.
      </Paragraph>
      <List mt="1.6rem" mb="1.6rem" flexDirection="column">
        <List.Item>
          <Checkbox label="Quisque tincidunt efficitur tempor" />
        </List.Item>
        <List.Item>
          <Checkbox label="Proin pellentesque dictum mauris sed lobortis" />
        </List.Item>
        <List.Item>
          <Checkbox label="Etiam nec mollis elit" />
        </List.Item>
      </List>
      <Paragraph mb="0.8rem" fontSize="1rem">
        Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
        dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis ante
        rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula tempus
        neque, ac ornare libero tempor placerat.
      </Paragraph>
      <Paragraph mb="0.8rem" fontSize="1rem">
        Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
        dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis ante
        rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula tempus
        neque, ac ornare libero tempor placerat.
      </Paragraph>
      <List mt="0.8rem" mb="0.8rem" flexDirection="row">
        <List.Item>
          <Checkbox label="Efficitur" />
        </List.Item>
        <List.Item>
          <Checkbox label="Lacinia" />
        </List.Item>
        <List.Item>
          <Checkbox label="Lacinia" />
        </List.Item>
      </List>
    </Modal>
  )
}

TaskSettings.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func
}

export { TaskSettings }
