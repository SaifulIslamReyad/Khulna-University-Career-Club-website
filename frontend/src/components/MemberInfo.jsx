import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MemberInfo = () => {
  return (
    <div className="bg-gradient-to-tr from-[#81c7de] from-0% to-[#4abced] to-100% relative">
      <div className="flex flex-col w-full h-[100vh] sm:flex-col md:flex-row items-center justify-center relative">
        {/* Image and Name part */}
        <section className="flex flex-col items-center justify-center gap-4 p-4 md:p-8 ">
          <div>
            <img
              src="src/assets/images/tajbid.jpeg"
              className="w-16 md:w-32 lg:w-48 h-16 md:h-32 lg:h-48 shadow-sm rounded-full object-cover object-top"
            />
          </div>
          <h1
            className=" sm:text-xl md:text-3xl  font-bold text-white text-center flex flex-col justify-center items-center"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            <span>Tajbid Hossain Bappi</span>
            <span>01738166031 </span>
            <span>Computer Science and Engineering Discipline</span>
          </h1>
        </section>
        {/*student id: Discipline, mobile, Home , email */}
        <section className="flex flex-col justify-center items-start gap-4 h-full md:w-1/2 sm:text-sm md:text-base lg:text-lg lg:font-medium sm:font-base">
          <Card className="text-black">
            <CardHeader>
              <CardTitle>Let&apos;s Talk</CardTitle>
              <CardDescription>Tell me about your self</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              numquam reiciendis nam similique asperiores reprehenderit, et
              animi! Accusamus, at sapiente! Deleniti et nihil tenetur maxime?
              Quam nam iusto vel illum.
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};
export default MemberInfo;
