import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    const emailLower = email.toLowerCase();

    if (emailLower.includes("student")) {
      navigate("/student/dashboard");
    } else if (emailLower.includes("alumni")) {
      navigate("/alumni/dashboard");
    } else if (emailLower.includes("admin")) {
      navigate("/admin/dashboard");
    } else {
      toast({
        title: "Invalid email",
        description: "Please use an email containing 'student', 'alumni', or 'admin'",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero p-4">
      <Card className="w-full max-w-md p-8 glass animate-in fade-in duration-500">
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary mb-4">
            <GraduationCap className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to Lovable</h1>
          <p className="text-muted-foreground">Alumni Management System</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Email Address</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              className="bg-background/50"
            />
          </div>

          <Button onClick={handleLogin} className="w-full" size="lg">
            Continue
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            <p>Try these emails:</p>
            <p className="mt-2">
              <code className="bg-muted px-2 py-1 rounded text-xs">student@university.edu</code>
            </p>
            <p className="mt-1">
              <code className="bg-muted px-2 py-1 rounded text-xs">alumni@university.edu</code>
            </p>
            <p className="mt-1">
              <code className="bg-muted px-2 py-1 rounded text-xs">admin@university.edu</code>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
