import Tooltip from "@mui/material/Tooltip";

interface TooltipProps {
    children: React.ReactNode;
    title: string;
}

export default function TooltipC({children, title} : TooltipProps) {
  return (
    <Tooltip
        title={title}
        placement="bottom"
        enterDelay={300}
        leaveDelay={200}
        sx={{ backgroundColor: "#151e27" }} 
      >
        <span>
          {children}
        </span>
      </Tooltip>
  )
}
