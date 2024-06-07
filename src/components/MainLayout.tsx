import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen bg-slate-400 flex">
      <div className="w-1/6 bg-slate-200 border-r border-slate-300">
        Navigation
      </div>
      <div className="w-5/6 bg-slate-400">
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "100%",
          }}
          size="small"
        />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
