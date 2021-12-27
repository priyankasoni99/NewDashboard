import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import faker from "faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,

  Tooltip,
  Legend
);
export default function UIelements() {
  const labels = ["January", "February", "March", "April"];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const data1 = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        // label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const data2 = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        // label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="col-lg-10 bg-grey">
      <div className="d-flex  ">
        <div className=" me-auto p-2 bd-highlight">
          <h2 className="Mainheading">
            {" "}
            <strong>UI Element</strong>
          </h2>
        </div>
        <div className=" p-2  Mainheading mt-3">
          <div
            className=" d-flex bg-light mb-3 justify-content-start height "
            style={{ width: "70%" }}
          >
            <div className="border-end marginleft1 px-3 py-2 ">
              <i className="fas fa-filter"></i>
            </div>
            <div className="border-end  marginleft2 px-3 py-2 ">filterby</div>
            <div className="border-end  marginleft3 px-3 py-2 ">Charts</div>
            <div className="border-end  marginleft4 px-3 py-2  ">
              <i className="fas fa-chevron-down"></i>
            </div>

            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="Mainheading bg-light borderradius  heightimg ">
        <h3>Bar Chart</h3>{" "}
        <div className="row mgbtm">
          <div className="col-md-4 " style={{ height: "" }}>
            <Bar options={options} data={data} />
          </div>
          <div className="col-md-4 ">
            <Bar options={options} data={data} />
          </div>
          <div className="col-md-4 ">
            <Bar options={options} data={data} />
          </div>
        </div>
        <div className="row Mainheading  bg-light borderradius mt-3 ">
          <h3>Pie Chart</h3>{" "}
          <div className="col-md-4 " style={{ width: "20%" }}>
            <Pie data={data1} />
          </div>
          <div className="col-md-4  " style={{ width: "20%" }}>
            <Pie data={data1} />
          </div>
          <div className="col-md-4 " style={{ width: "20%" }}>
            <Pie data={data1} />
          </div>
          <div className="col-md-4 " style={{ width: "20%" }}>
            <Pie data={data1} />
          </div>
          <div className="col-md-4 " style={{ width: "20%" }}>
            <Pie data={data1} />
          </div>
        </div>
        <div className="row Mainheading  bg-light borderradius  mt-3  mgbtm">
          <h3>Donut Chart</h3>{" "}
          <div className="col-md-4" style={{ width: "20%" }}>
            <Doughnut data={data2} />
          </div>
          <div className="col-md-4 " style={{ width: "20%" }}>
            <Doughnut data={data2} />
          </div>
          <div className="col-md-4 " style={{ width: "20%" }}>
            <Doughnut data={data2} />
          </div>
          <div className="col-md-4 " style={{ width: "20%" }}>
            <Doughnut data={data2} />
          </div>
          <div className="col-md-4 " style={{ width: "20%" }}>
            <Doughnut data={data2} />
          </div>
        </div>
      </div>
      {/* <div className="row">
          <div className="col-md-3">
            {" "}
            <img
              class="img himg"
              src="images/IMG_20211225_100352__05.jpg"
              alt=""
            />
          </div>
          <div className="col-md-3">
            {" "}
            <img class="img " src="images/IMG_20211225_100352__02.jpg" alt="" />
          </div>
          <div className="col-md-3">
            {" "}
            <img class="img" src="images/IMG_20211225_100352__03.jpg" alt="" />
          </div>
          <div className="col-md-3">
            {" "}
            <img class="img" src="images/IMG_20211225_100352__04.jpg" alt="" />
          </div>
        </div>
   
      <div className="Mainheading bg-light borderradius mt-3">
        <h3>Pie Chart</h3>{" "}
        <div className="row">
          <div className="col-md-3">
            {" "}
            <img
              class="img himg"
              src="images/IMG_20211225_100352__05.jpg"
              alt=""
            />
          </div>
          <div className="col-md-3">
            {" "}
            <img class="img " src="images/IMG_20211225_100352__02.jpg" alt="" />
          </div>
          <div className="col-md-3">
            {" "}
            <img class="img" src="images/IMG_20211225_100352__03.jpg" alt="" />
          </div>
          <div className="col-md-3">
            {" "}
            <img class="img" src="images/IMG_20211225_100352__04.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="Mainheading bg-light borderradius mt-3">
        <h3>Donut Chart</h3>{" "}
        <div className="row">
          <div className="col-md-3">
            {" "}
            <img
              class="img himg"
              src="images/IMG_20211225_100352__05.jpg"
              alt=""
            />
          </div>
          <div className="col-md-3">
            {" "}
            <img class="img " src="images/IMG_20211225_100352__02.jpg" alt="" />
          </div>
          <div className="col-md-3">
            {" "}
            <img class="img" src="images/IMG_20211225_100352__03.jpg" alt="" />
          </div>
          <div className="col-md-3">
            {" "}
            <img class="img" src="images/IMG_20211225_100352__04.jpg" alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
