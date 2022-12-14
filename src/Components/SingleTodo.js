import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleCheck,
    faCircleXmark,
	faPen,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const SingleTodo = ({ task, markDone, setUpdateData, deleteTask }) => {
	return (
							<React.Fragment >
								<div className="col taskBg">
									<div>
										<br />
										<span className="taskText">{task.title}</span>
									</div>
									<div className="iconsWrap">

                                        {task.status ? (
                                            <span 
											title="Completed / Not Completed"
											onClick={(e) => markDone(task.id)}
										>
											<FontAwesomeIcon icon={faCircleXmark} />
										</span>
                                        ) : (
                                            <span 
											title="Completed / Not Completed"
											onClick={(e) => markDone(task.id)}
										>
											<FontAwesomeIcon icon={faCircleCheck} />
										</span>
                                        )}

										{task.status ? null : (
											<span
												title="Edit"
												onClick={() =>
													setUpdateData({
														id: task.id,
														title: task.title,
														status: task.status ? true : false,
													})
												}
											>
												<FontAwesomeIcon icon={faPen} />
											</span>
										)}

										<span title="Delete" onClick={() => deleteTask(task.id)}>
											<FontAwesomeIcon icon={faTrashCan} />
										</span>
									</div>
								</div>
							</React.Fragment>
						
	);
};

export default SingleTodo;
