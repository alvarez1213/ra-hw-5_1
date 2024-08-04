import Card from 'react-bootstrap/Card';

export const MyCard = ({children}) => {
  return (
    <Card style={{ width: '18rem' }}>
      {children}
    </Card>
  )
}
