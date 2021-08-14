import {
  ListItem,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  IconButton,
  List,
  ListItemIcon,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SettingIcon from "@material-ui/icons/Settings";
import LayersIcon from "@material-ui/icons/Layers";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export const SidebarList = () => {
  return (
    <List>
      <ListItem>
        <PopupState variant="popper">
          {(popupState) => (
            <>
              <IconButton {...bindTrigger(popupState)}>
                <ListItemIcon>
                  <LayersIcon color="primary" />
                </ListItemIcon>
              </IconButton>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Usuários</MenuItem>
                <MenuItem onClick={popupState.close}>Grupos de Acesso</MenuItem>
                <MenuItem onClick={popupState.close}>
                  Modulos de Acesso
                </MenuItem>
                <MenuItem onClick={popupState.close}>Telas do Sistema</MenuItem>
                <MenuItem onClick={popupState.close}>Dispositivos</MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
        <ListItemText color=" primary" primary="Menu" />
      </ListItem>
      <ListItem>
        <PopupState variant="popper">
          {(popupState) => (
            <>
              <IconButton {...bindTrigger(popupState)}>
                <ListItemIcon>
                  <ShoppingCartIcon color="primary" />
                </ListItemIcon>
              </IconButton>

              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>
                  Pedidos do Ecommerce
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  Clientes do Ecommerce
                </MenuItem>
                <MenuItem onClick={popupState.close}>Produtos</MenuItem>
                <MenuItem onClick={popupState.close}>
                  Fotos dos Produtos
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  Seções de Produtos
                </MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
        <ListItemText primary="Ecommerce" />
      </ListItem>
      <ListItem>
        <PopupState variant="popper">
          {(popupState) => (
            <>
              <IconButton {...bindTrigger(popupState)} color="primary">
                <ListItemIcon>
                  <SettingIcon color="primary" />
                </ListItemIcon>
              </IconButton>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Empresas</MenuItem>
                <MenuItem onClick={popupState.close}> Parâmetros</MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
        <ListItemText primary="Configurações" />
      </ListItem>
    </List>
  );
};
