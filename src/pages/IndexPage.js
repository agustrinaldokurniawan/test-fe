import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MovieService } from "../service/MovieService";
import { Button } from "primereact/button";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

const IndexPage = () => {
    const movieService = new MovieService();

    const [movies, setMovies] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [filters, setFilters] = useState(null);

    useEffect(() => {
        movieService.getMovies().then((data) => {
            setMovies(data.results);
        });
        initFilters();
    }, []);

    const bodyTemplate = (data, props) => {
        return (
            <>
                <span className="p-column-title">{props.header}</span>
                {data[props.field]}
            </>
        );
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;

        let _filters = { ...filters };
        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const clearFilter = () => {
        initFilters();
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        });
        setGlobalFilterValue("");
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="col-12 xl:col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Popular Movie</h4>
                            </div>

                            <DataTable value={movies} paginator rows={5} className="p-datatable-products" filters={filters} header={header}>
                                <Column field="id" header="ID" sortable body={bodyTemplate}></Column>
                                <Column field="original_language" header="original_language" sortable body={bodyTemplate}></Column>
                                <Column field="original_title" header="original_title" sortable body={bodyTemplate}></Column>
                                <Column field="overview" header="overview" sortable body={bodyTemplate}></Column>
                            </DataTable>
                        </div>
                    </div>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="logo-container">
                            <div className="logo"></div>
                        </div>
                        <div className="container">
                            <h1 className="display-5">Hello! I'm George Marco Alvin</h1>
                            <h1 className="display-5 thin mt-auto">Consult, Design, and Develop Websites</h1>
                            <p className="small text-center text-light">
                                Have something great in mind? Feel free to contact me.
                                <br />
                                I'll help you to make it happen.
                                <br />
                            </p>
                            <p className="text-center">
                                <button className="button2 btn-outline-light btn-sm text-uppercase" id="whatsapp" href="#" role="button">
                                    Let's Make Contact
                                </button>
                            </p>
                        </div>
                    </div>
                    <main role="main">
                        <div className="custom-container">
                            <div className="grid">
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Consult{" "}
                                                <span className="float-right">
                                                    <i className="fas fa-comments"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Design{" "}
                                                <span className="float-right">
                                                    <i className="fas fa-paint-brush"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Develop{" "}
                                                <span className="float-right">
                                                    <i className="fas fa-cubes"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Revolutionary circular, movements a or impact framework social impact low- hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Marketing{" "}
                                                <span className="float-right">
                                                    <i className="fas fa-bullhorn"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Manage{" "}
                                                <span className="float-right">
                                                    <i className="fa fa-tasks"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 column">
                                    <div className="card bg-power">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Evolve{" "}
                                                <span className="float-right">
                                                    <i className="fas fa-chart-line icon"></i>
                                                </span>
                                            </h5>
                                            <p className="card-text">Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(IndexPage, comparisonFn);
