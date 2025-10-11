import { Box } from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"
import { MenuItem } from "@/components/ui/menu"

const MenuLink = ({
  to,
  value,
  label,
  icon,
}: {
  to: string
  value: string
  label: string
  icon: any
}) => {
  return (
    <Link to={to}>
      <MenuItem
        closeOnSelect
        value={value}
        gap={2}
        py={2}
        style={{ cursor: "pointer" }}
      >
        {icon}
        <Box flex="1">{label}</Box>
      </MenuItem>
    </Link>
  )
}

export default MenuLink
