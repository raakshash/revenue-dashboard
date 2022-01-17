import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Page from './Page';
import {
  MdInsertChart,
  MdPieChart,
  MdShowChart,
} from 'react-icons/md';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { BarChartData, LineChartData } from '../../pages/DashboardPage/constants';
import { getColor } from "../../utils/colors";

interface Props {
  lineChartData?: LineChartData;
  barChartData?: BarChartData;
  totalYearRevenue?: number;
  highestRevenueCompany?: string;
  highestRevenueCountry?: string;
  handleLogout: (event: any) => void;
}

const Dashboard: React.FC<Props> = (props) => {
  const {
    barChartData,
    lineChartData,
    totalYearRevenue,
    highestRevenueCompany,
    highestRevenueCountry,
    handleLogout
  } = props;

  const primaryColor: any = getColor('primary');

  const {
    data: barData = {},
    options: barOptions
  } = barChartData || {};

  const {
    data: lineData = {},
    options: lineOptions
  } = lineChartData || {};

  return (
    <Page
      className="DashboardPage"
      title="Revenue Dashboard"
      breadcrumbs={[{ name: 'Dashboard', active: true }]}
      handleLogout={handleLogout}
    >

      <Row>
        <Col lg="8" md="12" sm="12" xs="12">
          <Card>
            <CardHeader>
              Total Revenue{' '}
              <small className="text-muted text-capitalize">This year</small>
            </CardHeader>
            <CardBody>
              <Line data={lineData} options={lineOptions} />
            </CardBody>
          </Card>
        </Col>

        <Col lg="4" md="12" sm="12" xs="12">
          <Card>
            <CardHeader>Country based Total Revenue</CardHeader>
            <CardBody>
              <Bar data={barData} options={barOptions} />
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>
                <MdInsertChart size={25} color={primaryColor} /> Revenue of the year{' '}
                <Badge color="secondary">{totalYearRevenue}</Badge>
              </ListGroupItem>
              <ListGroupItem>
                <MdShowChart size={25} color={primaryColor} /> Highest Revenue company{' '}
                <Badge color="secondary">{highestRevenueCompany}</Badge>
              </ListGroupItem>
              <ListGroupItem>
                <MdPieChart size={25} color={primaryColor} /> Highest Revenue country
                <Badge color="secondary">{highestRevenueCountry}</Badge>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Page>
  );
}

export default Dashboard;
