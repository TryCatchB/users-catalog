import styles from "./CreateUser.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { IUser, IUserData } from "../../../../types/user.interface";

const CreateUser = (props: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const createUser: SubmitHandler<IUserData> = (data) => {
    props.setUsers((prev: IUser[]) => [
      ...prev,
      { id: prev.length + 1, ...data },
    ]);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(createUser)}>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      <ErrorMessage error={errors?.name?.message || undefined} />

      <input {...register("email", { required: true })} placeholder="Email" />
      <input {...register("phone", { required: true })} placeholder="Phone" />
      <button className="btn">Create</button>
    </form>
  );
};

export default CreateUser;
